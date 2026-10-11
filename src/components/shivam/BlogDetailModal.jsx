import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  User,
  Clock,
  Share2,
  Copy,
  Check,
  ArrowLeft,
  Sparkles,
  ArrowUp,
  MessageCircle,
} from "lucide-react";

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

export default function BlogDetailModal({ blog, onClose }) {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);
  const descriptionRef = useRef(null);

  // Lock body scroll while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, []);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Track scroll progress inside modal
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const totalScroll = scrollHeight - clientHeight;
    if (totalScroll > 0) {
      const progress = Math.min(100, Math.max(0, (scrollTop / totalScroll) * 100));
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 400);
    }
  };

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Auto-wrap tables in responsive containers for mobile & tablet compatibility
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

  // Copy link
  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // WhatsApp share
  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Check out this article from Chhabra Properties: "${blog.title}"\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  if (!blog) return null;

  const formattedDate = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 350 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-neutral-100 z-10"
        >
          {/* Scroll Progress Bar */}
          <div className="w-full h-1 bg-neutral-100 relative">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Sticky Header Bar */}
          <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-100 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>

              {blog.category && (
                <span className="inline-flex items-center text-[11px] sm:text-xs font-bold tracking-wider uppercase text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-full truncate">
                  {blog.category}
                </span>
              )}
            </div>

            {/* Actions: Reading Time, Share, Close */}
            <div className="flex items-center gap-2">
              <span className="hidden md:flex items-center gap-1.5 text-xs text-neutral-500 font-medium bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-100">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                {readingTime}
              </span>

              <button
                onClick={handleCopyLink}
                title="Copy article link"
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-700 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-500" />
                    <span className="hidden sm:inline">Share</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-neutral-500 hover:text-red-600 bg-neutral-100 hover:bg-red-50 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </header>

          {/* Scrollable Modal Body */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="blog-modal-scroll flex-1 overflow-y-auto px-4 sm:px-8 md:px-14 py-6 sm:py-10"
          >
            {/* Header Content */}
            <div className="max-w-4xl mx-auto">
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                {blog.category && (
                  <span className="text-xs font-bold tracking-widest uppercase text-red-600 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full">
                    {blog.category}
                  </span>
                )}
                <span className="text-xs text-neutral-500 flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3 text-neutral-400" />
                  {readingTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 leading-[1.2] tracking-tight mb-6">
                {blog.title}
              </h1>

              {/* Author & Date Metadata */}
              <div className="flex flex-wrap items-center gap-4 py-4 border-y border-neutral-100 text-sm text-neutral-600 mb-8">
                {blog.author && (
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                      {blog.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block font-medium">Author</span>
                      <span className="font-semibold text-neutral-800">{blog.author}</span>
                    </div>
                  </div>
                )}

                {formattedDate && (
                  <div className="flex items-center gap-2 ml-auto sm:ml-4 pl-4 border-l border-neutral-200">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span>{formattedDate}</span>
                  </div>
                )}
              </div>

              {/* Featured Cover Image */}
              {blog.image && (
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-neutral-100 mb-10 bg-neutral-950 group">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full max-h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
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

              {/* Full Blog Content with Rich Text Support (Tables, Images, Boldness, Lists, Quotes) */}
              {blog.content && (
                <article className="mb-12">
                  <div
                    ref={contentRef}
                    className="blog-rich-content"
                    dangerouslySetInnerHTML={{
                      __html: formatRichText(blog.content),
                    }}
                  />
                </article>
              )}

            </div>
          </div>

          {/* Floating Back to Top Button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              title="Scroll back to top"
              className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-red-600 text-white shadow-xl hover:bg-red-700 flex items-center justify-center transition-all duration-200 z-40 cursor-pointer"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
