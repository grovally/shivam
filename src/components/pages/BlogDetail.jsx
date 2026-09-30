import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = "https://chhhabra-2.onrender.com/api/blogs";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API}/${slug}`);

        if (!response.ok) {
          throw new Error("Blog not found");
        }

        const data = await response.json();
        setBlog(data);
      } catch (fetchError) {
        setError(fetchError.message || "Unable to load blog");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  useEffect(() => {
    if (!blog) return;

    const pageTitle = blog.meta_title || blog.title || "Chhabra Properties Blog";
    const pageDescription = blog.meta_description || blog.description || "Chhabra Properties blog";

    document.title = pageTitle;

    const setMeta = (selector, attr, value) => {
      let tag = document.head.querySelector(selector);

      if (!tag) {
        tag = document.createElement("meta");
        document.head.appendChild(tag);
      }

      tag.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "name", "description");
    document.querySelector('meta[name="description"]')?.setAttribute("content", pageDescription);

    const canonical = blog.canonical_url || `https://chhabra-properties.com/blog/${blog.slug || slug}`;
    let canonicalTag = document.head.querySelector('link[rel="canonical"]');

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute("href", canonical);

    const ogTitle = blog.meta_title || blog.title;
    const ogDescription = blog.meta_description || blog.description;
    const ogImage = blog.image || "https://chhabra-properties.com/default-og-image.jpg";

    const ogTags = [
      ["meta[property='og:title']", "property", "og:title", ogTitle],
      ["meta[property='og:description']", "property", "og:description", ogDescription],
      ["meta[property='og:image']", "property", "og:image", ogImage],
      ["meta[property='og:type']", "property", "og:type", "website"],
      ["meta[name='twitter:title']", "name", "twitter:title", ogTitle],
      ["meta[name='twitter:description']", "name", "twitter:description", ogDescription],
      ["meta[name='twitter:image']", "name", "twitter:image", ogImage],
    ];

    ogTags.forEach(([selector, attrKey, attrName, value]) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        document.head.appendChild(tag);
      }
      tag.setAttribute(attrKey, attrName);
      tag.setAttribute("content", value);
    });

    if (blog.image_alt_text) {
      const imageAltTag = document.head.querySelector('meta[property="og:image:alt"]') || document.createElement("meta");
      imageAltTag.setAttribute("property", "og:image:alt");
      imageAltTag.setAttribute("content", blog.image_alt_text);
      document.head.appendChild(imageAltTag);
    }
  }, [blog, slug]);

  if (loading) {
    return (
      <section className="min-h-screen bg-white px-6 py-24">
        <div className="max-w-4xl mx-auto text-center text-gray-500">Loading blog...</div>
      </section>
    );
  }

  if (error || !blog) {
    return (
      <section className="min-h-screen bg-white px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900">Blog not found</h1>
          <p className="text-gray-500 mt-3">{error || "This blog may have been removed."}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <article className="max-w-4xl mx-auto">
        {blog.image && (
          <img src={blog.image} alt={blog.image_alt_text || blog.title} className="w-full h-[420px] object-cover rounded-3xl" />
        )}

        <div className="mt-8">
          {blog.category && (
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-red-600">{blog.category}</span>
          )}

          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-gray-900">{blog.title}</h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-gray-500">
            {blog.author && <span>By {blog.author}</span>}
            {blog.createdAt && <span>• {new Date(blog.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>}
          </div>

          {blog.description && <p className="mt-8 text-2xl leading-relaxed text-gray-600">{blog.description}</p>}

          {blog.content && (
            <div className="mt-10 text-lg leading-8 text-gray-700 whitespace-pre-line">
              {blog.content}
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
