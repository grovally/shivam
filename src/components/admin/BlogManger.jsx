import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = "http://localhost:8000";

export default function BlogManager() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API}/api/blogs/admin/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      const data = await response.json();

      setBlogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to load blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      setDeleting(id);

      const response = await fetch(
        `${API}/api/blogs/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        alert("Unable to delete blog");
        return;
      }

      setBlogs((previous) =>
        previous.filter((blog) => blog.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setDeleting(null);
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const query = search.toLowerCase();

    return (
      blog.title?.toLowerCase().includes(query) ||
      blog.category?.toLowerCase().includes(query) ||
      blog.author?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="w-full">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Blog Manager
          </h1>

          <p className="text-gray-500 mt-1">
            Create, edit and manage your website blogs.
          </p>
        </div>

        <Link
          to="/admin/blogs/create"
          className="inline-flex items-center justify-center bg-black text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          + Add New Blog
        </Link>

      </div>


      {/* Search */}

      <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">

        <input
          type="text"
          placeholder="Search blogs by title, category or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black"
        />

      </div>


      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <p className="text-gray-500 text-sm">
            Total Blogs
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {blogs.length}
          </h2>
        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <p className="text-gray-500 text-sm">
            Published
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {
              blogs.filter(
                (blog) => blog.published
              ).length
            }
          </h2>
        </div>


        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <p className="text-gray-500 text-sm">
            Drafts
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {
              blogs.filter(
                (blog) => !blog.published
              ).length
            }
          </h2>
        </div>

      </div>


      {/* Blogs */}

      {loading ? (

        <div className="bg-white rounded-2xl border p-10 text-center">
          <p className="text-gray-500">
            Loading blogs...
          </p>
        </div>

      ) : filteredBlogs.length === 0 ? (

        <div className="bg-white rounded-2xl border p-12 text-center">

          <h2 className="text-xl font-semibold">
            No blogs found
          </h2>

          <p className="text-gray-500 mt-2">
            Create your first blog to get started.
          </p>

          <Link
            to="/admin/blogs/create"
            className="inline-block mt-5 bg-black text-white px-5 py-3 rounded-xl"
          >
            Create Blog
          </Link>

        </div>

      ) : (

        <div className="space-y-4">

          {filteredBlogs.map((blog) => (

            <div
              key={blog.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5"
            >

              <div className="flex flex-col md:flex-row gap-5">

                {/* Image */}

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full md:w-44 h-32 object-cover rounded-xl"
                />


                {/* Content */}

                <div className="flex-1 min-w-0">

                  <div className="flex flex-wrap items-center gap-2">

                    <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                      {blog.category}
                    </span>

                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        blog.published
                          ? "bg-green-50 text-green-600"
                          : "bg-yellow-50 text-yellow-600"
                      }`}
                    >
                      {blog.published
                        ? "Published"
                        : "Draft"}
                    </span>

                  </div>


                  <h2 className="text-xl font-bold mt-3 truncate">
                    {blog.title}
                  </h2>


                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {blog.description}
                  </p>


                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-4">

                    <span>
                      By {blog.author}
                    </span>

                    <span>
                      {blog.createdAt
                        ? new Date(
                            blog.createdAt
                          ).toLocaleDateString()
                        : ""}
                    </span>

                  </div>

                </div>


                {/* Actions */}

                <div className="flex md:flex-col gap-2 justify-end">

                  <Link
                    to={`/admin/blogs/edit/${blog.id}`}
                    className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-medium text-center"
                  >
                    Edit
                  </Link>


                  <Link
                    to={`/blog/${blog.slug}`}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 text-sm font-medium text-center"
                  >
                    View
                  </Link>


                  <button
                    onClick={() =>
                      deleteBlog(blog.id)
                    }
                    disabled={deleting === blog.id}
                    className="px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium disabled:opacity-50"
                  >
                    {deleting === blog.id
                      ? "Deleting..."
                      : "Delete"}
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}