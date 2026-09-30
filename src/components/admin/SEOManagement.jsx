import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = "https://chhhabra-2.onrender.com";

const emptyForm = {
  meta_title: "",
  meta_description: "",
  focus_keyword: "",
  slug: "",
  image_alt_text: "",
  canonical_url: "",
};

export default function SEOManagement() {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  const [blogs, setBlogs] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    loadBlogs();
  }, [navigate, token]);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API}/api/blogs/admin/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to load blogs");
      }

      const data = await response.json();
      const safeBlogs = Array.isArray(data) ? data : [];
      setBlogs(safeBlogs);

      if (!selectedId && safeBlogs.length > 0) {
        setSelectedId(safeBlogs[0].id);
      }
    } catch (fetchError) {
      console.error(fetchError);
      setError("Unable to load blog SEO list.");
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return blogs;

    return blogs.filter((blog) => {
      const values = [
        blog.title,
        blog.category,
        blog.slug,
        blog.seo_status,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return values.includes(query);
    });
  }, [blogs, search]);

  const selectedBlog = useMemo(
    () => blogs.find((blog) => String(blog.id) === String(selectedId)) || null,
    [blogs, selectedId]
  );

  useEffect(() => {
    if (!selectedBlog) {
      setForm(emptyForm);
      return;
    }

    setForm({
      meta_title: selectedBlog.meta_title || "",
      meta_description: selectedBlog.meta_description || "",
      focus_keyword: selectedBlog.focus_keyword || "",
      slug: selectedBlog.slug || "",
      image_alt_text: selectedBlog.image_alt_text || "",
      canonical_url: selectedBlog.canonical_url || "",
    });
  }, [selectedBlog]);

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const saveSeo = async () => {
    if (!selectedBlog) {
      setError("Please select a blog first.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const response = await fetch(`${API}/api/blogs/${selectedBlog.id}/seo`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.detail || data?.message || "SEO update failed.");
      }

      setSuccess("SEO settings saved successfully.");
      setBlogs((previous) =>
        previous.map((blog) => (String(blog.id) === String(selectedBlog.id) ? { ...blog, ...data } : blog))
      );
    } catch (saveError) {
      console.error(saveError);
      setError(saveError.message || "SEO could not be saved.");
    } finally {
      setSaving(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Chhabra Admin</h1>
            <p className="text-gray-500">SEO Management</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/admin/dashboard" className="border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-100 transition">
              Dashboard
            </Link>
            <Link to="/admin/blogs/create" className="bg-black text-white px-4 py-2 rounded-xl">
              + Add Blog
            </Link>
            <button onClick={logout} className="border px-4 py-2 rounded-xl">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">SEO Management</h2>
            <p className="text-gray-500 mt-1">Edit metadata, keywords and social previews for published blog posts.</p>
          </div>

          <div className="w-full md:max-w-sm">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blogs by title or slug..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
            {success}
          </div>
        )}

        {loading ? (
          <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center text-gray-500">
            Loading blogs...
          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-700">Title</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Category</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Slug</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">SEO</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBlogs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-4 py-10 text-center text-gray-500">
                          No blogs match your search.
                        </td>
                      </tr>
                    ) : (
                      filteredBlogs.map((blog) => (
                        <tr key={blog.id} className={String(blog.id) === String(selectedId) ? "bg-gray-50" : "bg-white border-b border-gray-100"}>
                          <td className="px-4 py-3 align-top">
                            <div className="font-semibold text-gray-900">{blog.title}</div>
                          </td>
                          <td className="px-4 py-3 align-top text-gray-600">{blog.category || "-"}</td>
                          <td className="px-4 py-3 align-top text-gray-600">{blog.slug || "-"}</td>
                          <td className="px-4 py-3 align-top">
                            <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${blog.seo_status === "Complete" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                              {blog.seo_status || "Missing"}
                            </span>
                          </td>
                          <td className="px-4 py-3 align-top">
                            <button
                              type="button"
                              onClick={() => setSelectedId(blog.id)}
                              className="bg-black text-white px-3 py-2 rounded-lg text-sm"
                            >
                              Edit SEO
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-6">
              {!selectedBlog ? (
                <div className="text-gray-500">Select a blog to edit SEO details.</div>
              ) : (
                <>
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">Selected Blog</p>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">{selectedBlog.title}</h3>
                    <p className="text-gray-500 mt-1">{selectedBlog.category}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 font-semibold text-gray-800">Meta Title</label>
                      <input
                        type="text"
                        value={form.meta_title}
                        onChange={(e) => updateField("meta_title", e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        placeholder="Enter SEO title"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-gray-800">Meta Description</label>
                      <textarea
                        rows={3}
                        value={form.meta_description}
                        onChange={(e) => updateField("meta_description", e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black resize-none"
                        placeholder="Summarize the blog for search engines"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-gray-800">Focus Keyword</label>
                      <input
                        type="text"
                        value={form.focus_keyword}
                        onChange={(e) => updateField("focus_keyword", e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        placeholder="e.g. luxury flats in Noida"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-gray-800">URL Slug</label>
                      <input
                        type="text"
                        value={form.slug}
                        onChange={(e) => updateField("slug", e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        placeholder="example-blog-slug"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-gray-800">Image Alt Text</label>
                      <input
                        type="text"
                        value={form.image_alt_text}
                        onChange={(e) => updateField("image_alt_text", e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        placeholder="Describe your blog image"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-gray-800">Canonical URL (optional)</label>
                      <input
                        type="url"
                        value={form.canonical_url}
                        onChange={(e) => updateField("canonical_url", e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        placeholder="https://example.com/blog/slug"
                      />
                    </div>
                  </div>

                  <div className="mt-6 border border-gray-200 rounded-2xl p-4 bg-gray-50">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">Search Preview</p>
                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                      <p className="text-xs text-blue-700">{selectedBlog.slug || "blog-slug"}</p>
                      <h4 className="mt-2 text-xl font-semibold text-blue-800">{form.meta_title || selectedBlog.title}</h4>
                      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                        {form.meta_description || selectedBlog.description}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={saveSeo}
                    disabled={saving}
                    className="mt-6 w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-60"
                  >
                    {saving ? "Saving SEO..." : "Save SEO Settings"}
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
