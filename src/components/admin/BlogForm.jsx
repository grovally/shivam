import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = "http://localhost:8000";

export default function BlogForm() {

  const navigate = useNavigate();
  const { id } = useParams();

  const token = localStorage.getItem(
    "adminToken"
  );

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    author: "chhabra",
    image: "",
    published: true
  });


  useEffect(() => {

    if (!token) {

      navigate("/admin/login");

      return;
    }

    if (id) {
      loadBlog();
    }

  }, [id]);


  const loadBlog = async () => {

    const response = await fetch(
      `${API}/api/blogs/admin/all`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const blogs = await response.json();

    const blog = blogs.find(
      (item) => item.id === id
    );

    if (blog) {

      setForm({
        title: blog.title,
        description: blog.description,
        content: blog.content,
        category: blog.category,
        author: blog.author,
        image: blog.image,
        published: blog.published
      });

    }
  };


  const updateField = (field, value) => {

    setForm((previous) => ({
      ...previous,
      [field]: value
    }));

  };


  const saveBlog = async (e) => {

    e.preventDefault();


    const url = id
      ? `${API}/api/blogs/${id}`
      : `${API}/api/blogs/`;


    const method = id
      ? "PUT"
      : "POST";


    const response = await fetch(
      url,
      {
        method,

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },

        body: JSON.stringify(form)
      }
    );


    if (!response.ok) {

      alert("Unable to save blog");

      return;
    }


    navigate("/admin/dashboard");

  };


  return (

    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <form
        onSubmit={saveBlog}
        className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow"
      >

        <h1 className="text-3xl font-bold">
          {id ? "Edit Blog" : "Create Blog"}
        </h1>


        <div className="space-y-5 mt-8">

          <input
            value={form.title}
            onChange={(e) =>
              updateField(
                "title",
                e.target.value
              )
            }
            placeholder="Blog Title"
            className="w-full border p-4 rounded-xl"
            required
          />


          <input
            value={form.category}
            onChange={(e) =>
              updateField(
                "category",
                e.target.value
              )
            }
            placeholder="Category"
            className="w-full border p-4 rounded-xl"
            required
          />


          <input
            value={form.author}
            onChange={(e) =>
              updateField(
                "author",
                e.target.value
              )
            }
            placeholder="Author"
            className="w-full border p-4 rounded-xl"
            required
          />


          <input
            value={form.image}
            onChange={(e) =>
              updateField(
                "image",
                e.target.value
              )
            }
            placeholder="Cloudinary Image URL"
            className="w-full border p-4 rounded-xl"
            required
          />


          {form.image && (

            <img
              src={form.image}
              alt="Preview"
              className="w-full h-64 object-cover rounded-2xl"
            />

          )}


          <textarea
            value={form.description}
            onChange={(e) =>
              updateField(
                "description",
                e.target.value
              )
            }
            placeholder="Short Description"
            rows="4"
            className="w-full border p-4 rounded-xl"
            required
          />


          <textarea
            value={form.content}
            onChange={(e) =>
              updateField(
                "content",
                e.target.value
              )
            }
            placeholder="Complete Blog Content"
            rows="15"
            className="w-full border p-4 rounded-xl"
            required
          />


          <label className="flex gap-3 items-center">

            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) =>
                updateField(
                  "published",
                  e.target.checked
                )
              }
            />

            Publish Blog

          </label>


          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl font-semibold"
          >
            {id ? "Update Blog" : "Publish Blog"}
          </button>

        </div>

      </form>

    </div>
  );
}