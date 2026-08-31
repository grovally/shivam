import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = "https://chhhabra-1.onrender.com";

export default function AdminDashboard() {

  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  const token = localStorage.getItem(
    "adminToken"
  );


  useEffect(() => {

    if (!token) {

      navigate("/admin/login");

      return;
    }

    loadBlogs();

  }, []);


  const loadBlogs = async () => {

    const response = await fetch(
      `${API}/api/blogs/admin/all`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (response.status === 401) {

      localStorage.removeItem(
        "adminToken"
      );

      navigate("/admin/login");

      return;
    }

    const data = await response.json();

    setBlogs(data);
  };


  const deleteBlog = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this blog?"
      );

    if (!confirmDelete) return;


    await fetch(
      `${API}/api/blogs/${id}`,
      {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    loadBlogs();
  };


  const logout = () => {

    localStorage.removeItem(
      "adminToken"
    );

    navigate("/admin/login");
  };


  return (

    <div className="min-h-screen bg-gray-100">

      <header className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold">
              Chhabra Admin
            </h1>

            <p className="text-gray-500">
              Blog Management
            </p>
          </div>


          <div className="flex gap-3">

            <Link
              to="/admin/blogs/create"
              className="bg-black text-white px-5 py-3 rounded-xl"
            >
              + Add Blog
            </Link>

            <button
              onClick={logout}
              className="border px-5 py-3 rounded-xl"
            >
              Logout
            </button>

          </div>

        </div>

      </header>


      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid gap-5">

          {blogs.map((blog) => (

            <div
              key={blog.id}
              className="bg-white rounded-2xl p-5 flex gap-5 items-center"
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="w-32 h-24 object-cover rounded-xl"
              />


              <div className="flex-1">

                <h2 className="font-bold text-xl">
                  {blog.title}
                </h2>

                <p className="text-gray-500 mt-1">
                  {blog.category}
                </p>

                <p className="text-sm mt-2">
                  {blog.published
                    ? "Published"
                    : "Draft"}
                </p>

              </div>


              <div className="flex gap-2">

                <Link
                  to={`/admin/blogs/edit/${blog.id}`}
                  className="px-4 py-2 bg-gray-100 rounded-lg"
                >
                  Edit
                </Link>


                <button
                  onClick={() =>
                    deleteBlog(blog.id)
                  }
                  className="px-4 py-2 bg-red-50 text-red-600 rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}
