import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const API = "https://chhhabra-1.onrender.com/api/blogs";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API}/`);

        if (!response.ok) {
          throw new Error(`Failed to load blogs (${response.status})`);
        }

        const data = await response.json();
        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Blogs Error:", err);
        setError(err.message);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="min-h-screen bg-white py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* =====================================
            HEADER
        ===================================== */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-red-600 uppercase">
            Chhabra Properties Insights
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3 text-neutral-900">
            Latest Blogs & Articles
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 mt-4 text-base sm:text-lg">
            Stay updated with expert real estate insights, Noida & Greater Noida infrastructure developments, property market trends, and investment opportunities.
          </p>
        </div>

        {/* =====================================
            LOADING STATE
        ===================================== */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-3xl border border-gray-100 p-4 bg-gray-50/50 animate-pulse space-y-4"
              >
                <div className="h-52 bg-gray-200 rounded-2xl w-full" />
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-6 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        )}

        {/* =====================================
            ERROR STATE
        ===================================== */}
        {!loading && error && (
          <div className="text-center py-20 bg-red-50/50 rounded-3xl border border-red-100 max-w-xl mx-auto p-8">
            <h2 className="text-2xl font-semibold text-red-600">
              Unable to load blogs
            </h2>
            <p className="text-gray-600 mt-2 text-sm">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        {/* =====================================
            EMPTY STATE
        ===================================== */}
        {!loading && !error && blogs.length === 0 && (
          <div className="text-center py-20 bg-neutral-50 rounded-3xl max-w-xl mx-auto p-8">
            <p className="text-gray-500 text-lg">No blogs published yet.</p>
            <p className="text-gray-400 text-sm mt-1">
              Check back soon for new property insights and articles.
            </p>
          </div>
        )}

        {/* =====================================
            BLOG CARDS GRID
        ===================================== */}
        {!loading && !error && blogs.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => {
              const blogLink = `/blog/${blog.slug || blog.id}`;
              const formattedDate = blog.createdAt
                ? new Date(blog.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : null;

              return (
                <article
                  key={blog.id || blog._id || blog.slug}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white hover:shadow-2xl transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Featured Image */}
                    <Link to={blogLink} className="block overflow-hidden relative">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                        />
                      ) : (
                        <div className="w-full h-56 bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm font-medium">
                          No Image Available
                        </div>
                      )}

                      {blog.category && (
                        <span className="absolute top-4 left-4 text-[11px] font-bold tracking-wider uppercase text-white bg-red-600/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                          {blog.category}
                        </span>
                      )}
                    </Link>

                    {/* Content Section */}
                    <div className="p-6">
                      {/* Date & Author */}
                      <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                        {formattedDate && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-red-500" />
                            {formattedDate}
                          </span>
                        )}
                        {blog.author && (
                          <span className="flex items-center gap-1 border-l border-neutral-200 pl-3">
                            <User className="w-3.5 h-3.5 text-neutral-400" />
                            {blog.author}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-red-600 transition line-clamp-2 leading-snug">
                        <Link to={blogLink}>{blog.title}</Link>
                      </h2>

                      {/* Description Preview */}
                      {blog.description && (
                        <div
                          className="text-gray-600 mt-3 line-clamp-3 text-sm leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: blog.description }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Footer Card Link */}
                  <div className="px-6 pb-6 pt-2 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-neutral-400">
                      Read full article
                    </span>

                    <Link
                      to={blogLink}
                      className="inline-flex items-center gap-1.5 font-bold text-sm text-red-600 group-hover:text-red-700 transition"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
