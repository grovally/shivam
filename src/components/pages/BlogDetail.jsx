import { useEffect, useState, useMemo, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Sparkles,
  ArrowUp,
  ChevronRight,
  BookOpen,
  Phone,
  MessageCircle,
} from "lucide-react";

const API = "https://chhhabra-1.onrender.com/api/blogs";

/**
 * Format raw content if plain text or sanitize/normalize HTML
 */
function formatRichText(htmlString) {
  if (!htmlString) return "";
  const hasHtml = /<[a-z][\s\S]*>/i.test(htmlString);
  if (!hasHtml) {
    return htmlString
      .split(/\n\n+/)
      .map((block) => `<p>${block.replace(/\n/g, "<br/>")}</p>`)
      .join("");
  }
  return htmlString;
}

function updateMetaTag(property, attr, value) {
  if (!value) return;
  let element = document.querySelector(`meta[${attr}="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

function updateCanonicalUrl(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export default function BlogDetail() {
  const { id, slug } = useParams();
  const blogIdentifier = slug || id;
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const contentRef = useRef(null);
  const descriptionRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogIdentifier]);

  // Fetch blog data
  useEffect(() => {
    let isMounted = true;

    async function loadBlogData() {
      try {
        setLoading(true);
        setError("");

        let matchedBlog = null;
        let allBlogs = [];

        // 1. Try fetching directly by slug or id
        try {
          const directRes = await fetch(`${API}/${blogIdentifier}`);
          if (directRes.ok) {
            const data = await directRes.json();
            if (data && (data.id || data.slug || data.title)) {
              matchedBlog = data;
            }
          }
        } catch {
          // Fall through to list fetch
        }

        // 2. Fetch all blogs for fallback lookup & related articles
        try {
          const listRes = await fetch(`${API}/`);
          if (listRes.ok) {
            const listData = await listRes.json();
            if (Array.isArray(listData)) {
              allBlogs = listData;
              if (!matchedBlog) {
                matchedBlog = listData.find(
                  (b) =>
                    String(b.slug).toLowerCase() === String(blogIdentifier).toLowerCase() ||
                    String(b.id) === String(blogIdentifier) ||
                    String(b._id) === String(blogIdentifier)
                );
              }
            }
          }
        } catch (listErr) {
          console.error("Failed to fetch blog list:", listErr);
        }

        if (!isMounted) return;

        if (!matchedBlog) {
          setError("Blog article not found or has been removed.");
          setBlog(null);
        } else {
          setBlog(matchedBlog);
          // Set related blogs (excluding current)
          const others = allBlogs.filter(
            (b) =>
              String(b.slug || b.id) !== String(matchedBlog.slug || matchedBlog.id)
          );
          setRelatedBlogs(others.slice(0, 3));
        }
      } catch (err) {
        if (isMounted) {
          console.error("Blog load error:", err);
          setError("Unable to load blog details. Please try again later.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadBlogData();

    return () => {
      isMounted = false;
    };
  }, [blogIdentifier]);

  // Track window scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
        setShowBackToTop(window.scrollY > 400);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Wrap tables for responsive horizontal scrolling
  useEffect(() => {
    const wrapTables = (container) => {
      if (!container) return;
      const tables = container.querySelectorAll("table");
      tables.forEach((table) => {
        if (!table.parentElement.classList.contains("blog-table-wrapper")) {
          const wrapper = document.createElement("div");
          wrapper.className = "blog-table-wrapper";
          table.parentNode.insertBefore(wrapper, table);
          wrapper.appendChild(table);
        }
      });
    };

    wrapTables(contentRef.current);
    wrapTables(descriptionRef.current);
  }, [blog?.content, blog?.description]);

  // Compute estimated reading time
  const readingTime = useMemo(() => {
    if (!blog) return "1 min read";
    const rawText = `${blog.title || ""} ${blog.description || ""} ${blog.content || ""}`.replace(
      /<[^>]*>/g,
      " "
    );
    const words = rawText.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  }, [blog]);

  // Dynamic Open Graph / SEO Metadata
  useEffect(() => {
    if (!blog) return;

    const pageTitle = `${blog.title} | Chhabra Properties`;
    document.title = pageTitle;

    const plainDesc = (blog.description || blog.content || "")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const finalDesc =
      plainDesc.slice(0, 190) ||
      "Read the latest real estate updates and property insights from Chhabra Properties.";

    const canonicalUrl = `https://chhabra-properties.com/blog/${blog.slug || blog.id}`;
    const ogImg =
      blog.image ||
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890737/DELTA-II_ajsre2.png";

    updateCanonicalUrl(canonicalUrl);
    updateMetaTag("description", "name", finalDesc);

    // Open Graph
    updateMetaTag("og:title", "property", pageTitle);
    updateMetaTag("og:description", "property", finalDesc);
    updateMetaTag("og:image", "property", ogImg);
    updateMetaTag("og:url", "property", canonicalUrl);
    updateMetaTag("og:type", "property", "article");

    // Twitter Card
    updateMetaTag("twitter:title", "name", pageTitle);
    updateMetaTag("twitter:description", "name", finalDesc);
    updateMetaTag("twitter:image", "name", ogImg);
  }, [blog]);

  const formattedDate = blog?.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    : null;

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50/50 py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto animate-pulse">
          <div className="h-4 w-32 bg-gray-200 rounded mb-8" />
          <div className="h-10 bg-gray-200 rounded-lg w-3/4 mb-4" />
          <div className="h-5 bg-gray-200 rounded w-1/2 mb-8" />
          <div className="h-[380px] bg-gray-200 rounded-3xl mb-8" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-28 px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-100">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Article Not Found
          </h1>
          <p className="text-gray-500 mb-6 text-sm">
            {error || "The blog post you're looking for doesn't exist or has been moved."}
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16">
        {/* Navigation & Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <Link to="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/blog" className="hover:text-red-600 transition">
              Blogs
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-800 font-medium truncate max-w-[200px] sm:max-w-[320px]">
              {blog.title}
            </span>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Blogs
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          {/* Badge & Read Time */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            {blog.category && (
              <span className="text-xs font-bold tracking-widest uppercase text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                {blog.category}
              </span>
            )}
            <span className="text-xs text-neutral-500 flex items-center gap-1.5 bg-neutral-100 px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              {readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-neutral-900 leading-[1.2] tracking-tight mb-6">
            {blog.title}
          </h1>

          {/* Author & Date Metadata */}
          <div className="flex flex-wrap items-center gap-4 py-4 border-y border-neutral-100 text-sm text-neutral-600">
            {blog.author && (
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <span className="text-[11px] text-neutral-400 block font-medium uppercase tracking-wider">
                    Written by
                  </span>
                  <span className="font-semibold text-neutral-800 capitalize">
                    {blog.author}
                  </span>
                </div>
              </div>
            )}

            {formattedDate && (
              <div className="flex items-center gap-2 sm:ml-auto pl-4 border-l border-neutral-200">
                <Calendar className="w-4 h-4 text-red-600" />
                <span>{formattedDate}</span>
              </div>
            )}
          </div>
        </header>

        {/* Featured Cover Image */}
        {blog.image && (
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-neutral-100 mb-10 bg-neutral-950">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-h-[520px] object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        )}

        {/* Short Description (Executive Summary / Overview) */}
        {blog.description && (
          <section className="mb-10">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50/60 via-neutral-50/80 to-amber-50/30 border-l-4 border-l-red-600 border border-red-100/80 p-5 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-3">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span>Overview & Key Summary</span>
              </div>

              <div
                ref={descriptionRef}
                className="blog-rich-content text-neutral-800 text-base sm:text-lg font-medium leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: formatRichText(blog.description),
                }}
              />
            </div>
          </section>
        )}

        {/* Full Blog Content (Rich text, tables, headers, lists) */}
        {blog.content && (
          <div className="mb-12">
            <div
              ref={contentRef}
              className="blog-rich-content"
              dangerouslySetInnerHTML={{
                __html: formatRichText(blog.content),
              }}
            />
          </div>
        )}

        {/* Related Articles Section */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16 pt-12 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                  Keep Reading
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 mt-1">
                  More Articles
                </h3>
              </div>
              <Link
                to="/blog"
                className="text-sm font-semibold text-red-600 hover:text-red-700 transition"
              >
                View All →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id || item.slug}
                  to={`/blog/${item.slug || item.id}`}
                  className="group bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200/80 hover:shadow-lg transition duration-300 flex flex-col"
                >
                  {item.image ? (
                    <div className="h-40 overflow-hidden bg-neutral-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-40 bg-neutral-100 flex items-center justify-center text-neutral-400 text-xs font-medium">
                      No Image
                    </div>
                  )}

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {item.category && (
                        <span className="text-[11px] font-bold uppercase text-red-600 tracking-wider">
                          {item.category}
                        </span>
                      )}
                      <h4 className="text-sm font-bold text-neutral-900 mt-1 line-clamp-2 group-hover:text-red-600 transition">
                        {item.title}
                      </h4>
                    </div>

                    <span className="text-xs text-red-600 font-semibold mt-4 block">
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          title="Scroll back to top"
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl flex items-center justify-center transition-all duration-200 z-40 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </article>
  );
}
