import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = "https://chhhabra-2.onrender.com";

export default function BlogForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [token, setToken] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    author: "chhabra",
    image: "",
    published: true,
  });

  const [loading, setLoading] = useState(false);
  const [loadingBlog, setLoadingBlog] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // GET ADMIN TOKEN
  // =========================
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");

    if (!adminToken) {
      navigate("/admin/login");
      return;
    }

    setToken(adminToken);
  }, [navigate]);

  // =========================
  // LOAD BLOG FOR EDIT
  // =========================
  useEffect(() => {
    if (token && id) {
      loadBlog();
    }
  }, [token, id]);

  const loadBlog = async () => {
    try {
      setLoadingBlog(true);
      setError("");

      console.log(
        "Loading blog from:",
        `${API}/api/blogs/admin/all`
      );

      const response = await fetch(
        `${API}/api/blogs/admin/all`,
        {
          method: "GET",
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

      if (!response.ok) {
        throw new Error(
          `Failed to load blogs (${response.status})`
        );
      }

      const blogs = await response.json();

      const blog = blogs.find(
        (item) =>
          String(item.id) === String(id)
      );

      if (!blog) {
        setError("Blog not found.");
        return;
      }

      setForm({
        title: blog.title || "",
        description: blog.description || "",
        content: blog.content || "",
        category: blog.category || "",
        author: blog.author || "chhabra",
        image: blog.image || "",
        published:
          blog.published !== undefined
            ? blog.published
            : true,
      });
    } catch (error) {
      console.error(
        "Load blog error:",
        error
      );

      setError(
        "Blog load nahi ho pa raha. Backend check karo."
      );
    } finally {
      setLoadingBlog(false);
    }
  };

  // =========================
  // UPDATE FORM FIELD
  // =========================
  const updateField = (
    field,
    value
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // =========================
  // SAVE BLOG
  // =========================
  const saveBlog = async (e) => {
    e.preventDefault();

    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const url = id
        ? `${API}/api/blogs/${id}`
        : `${API}/api/blogs/`;

      const method = id
        ? "PUT"
        : "POST";

      console.log("================================");
      console.log("BLOG SAVE");
      console.log("API:", API);
      console.log("URL:", url);
      console.log("METHOD:", method);
      console.log("================================");

      const response = await fetch(
        url,
        {
          method,
          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify(form),
        }
      );

      // =========================
      // TOKEN EXPIRED
      // =========================
      if (response.status === 401) {
        localStorage.removeItem(
          "adminToken"
        );

        alert(
          "Session expired. Please login again."
        );

        navigate("/admin/login");
        return;
      }

      // =========================
      // RESPONSE
      // =========================
      let data = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        console.error(
          "Backend error:",
          data
        );

        const message =
          data?.detail ||
          data?.message ||
          "Unable to save blog.";

        setError(message);

        alert(message);

        return;
      }

      console.log(
        "Blog saved successfully:",
        data
      );

      alert(
        id
          ? "Blog updated successfully!"
          : "Blog created successfully!"
      );

      navigate(
        "/admin/dashboard"
      );
    } catch (error) {
      console.error(
        "Save blog error:",
        error
      );

      setError(
        "Backend server se connection nahi ho pa raha."
      );

      alert(
        "Backend server se connection nahi ho pa raha."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOADING BLOG
  // =========================
  if (id && loadingBlog) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-5" />

          <h2 className="text-xl font-bold">
            Loading Blog...
          </h2>

          <p className="text-gray-500 mt-2">
            Please wait
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6">

      <form
        onSubmit={saveBlog}
        className="max-w-4xl mx-auto bg-white rounded-3xl p-5 sm:p-8 shadow-xl"
      >

        {/* =========================
            HEADER
        ========================= */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {id
                ? "Edit Blog"
                : "Create Blog"}
            </h1>

            <p className="text-gray-500 mt-1">
              {id
                ? "Update your blog details"
                : "Create a new blog post"}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              navigate(
                "/admin/dashboard"
              )
            }
            className="border border-gray-200 px-5 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            ← Dashboard
          </button>

        </div>

        {/* =========================
            ERROR
        ========================= */}
        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl">
            <p className="font-semibold">
              Error
            </p>

            <p className="text-sm mt-1">
              {error}
            </p>
          </div>
        )}

        {/* =========================
            FORM
        ========================= */}
        <div className="space-y-6 mt-8">

          {/* TITLE */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Blog Title
            </label>

            <input
              type="text"
              value={form.title}
              onChange={(e) =>
                updateField(
                  "title",
                  e.target.value
                )
              }
              placeholder="Enter blog title"
              className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Category
            </label>

            <input
              type="text"
              value={form.category}
              onChange={(e) =>
                updateField(
                  "category",
                  e.target.value
                )
              }
              placeholder="Real Estate, Property, Investment..."
              className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* AUTHOR */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Author
            </label>

            <input
              type="text"
              value={form.author}
              onChange={(e) =>
                updateField(
                  "author",
                  e.target.value
                )
              }
              placeholder="Author name"
              className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Cloudinary Image URL
            </label>

            <input
              type="url"
              value={form.image}
              onChange={(e) =>
                updateField(
                  "image",
                  e.target.value
                )
              }
              placeholder="https://res.cloudinary.com/..."
              className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* IMAGE PREVIEW */}
          {form.image && (
            <div>
              <p className="font-semibold text-gray-800 mb-2">
                Image Preview
              </p>

              <img
                src={form.image}
                alt={
                  form.title ||
                  "Blog preview"
                }
                className="w-full h-64 sm:h-80 object-cover rounded-2xl border border-gray-200"
                onError={(e) => {
                  e.currentTarget.style.display =
                    "none";
                }}
              />
            </div>
          )}

          {/* DESCRIPTION */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Short Description
            </label>

            <textarea
              value={form.description}
              onChange={(e) =>
                updateField(
                  "description",
                  e.target.value
                )
              }
              placeholder="Write a short description..."
              rows={4}
              className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-black resize-none"
              required
            />
          </div>

          {/* CONTENT */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Complete Blog Content
            </label>

            <textarea
              value={form.content}
              onChange={(e) =>
                updateField(
                  "content",
                  e.target.value
                )
              }
              placeholder="Write complete blog content..."
              rows={18}
              className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-black resize-y"
              required
            />
          </div>

          {/* PUBLISHED */}
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">

            <input
              id="published"
              type="checkbox"
              checked={
                form.published
              }
              onChange={(e) =>
                updateField(
                  "published",
                  e.target.checked
                )
              }
              className="w-5 h-5"
            />

            <label
              htmlFor="published"
              className="font-semibold cursor-pointer"
            >
              Publish Blog
            </label>

          </div>

          {/* SAVE BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? id
                ? "Updating Blog..."
                : "Publishing Blog..."
              : id
              ? "Update Blog"
              : "Publish Blog"}
          </button>

        </div>

      </form>

    </div>
  );
}