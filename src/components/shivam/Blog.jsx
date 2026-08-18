import { useEffect, useState } from "react";

const API = "https://chhhabra-2.onrender.com/api/blogs";

export default function Blog() {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Selected blog for popup
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {

    const fetchBlogs = async () => {

      try {

        setLoading(true);
        setError("");

        const response = await fetch(`${API}/`);

        if (!response.ok) {
          throw new Error(
            `Failed to load blogs (${response.status})`
          );
        }

        const data = await response.json();

        console.log("Blogs received:", data);

        setBlogs(Array.isArray(data) ? data : []);

      } catch (error) {

        console.error("Blogs Error:", error);

        setError(error.message);

        setBlogs([]);

      } finally {

        setLoading(false);

      }

    };

    fetchBlogs();

  }, []);


  // ===============================
  // OPEN BLOG POPUP
  // ===============================

  const openBlog = (blog) => {
    setSelectedBlog(blog);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";
  };


  // ===============================
  // CLOSE BLOG POPUP
  // ===============================

  const closeBlog = () => {

    setSelectedBlog(null);

    // Enable background scrolling
    document.body.style.overflow = "auto";

  };


  return (

    <section className="min-h-screen bg-white py-24 px-6">

      <div className="max-w-7xl mx-auto">


        {/* =====================================
            HEADER
        ===================================== */}

        <div className="text-center mb-14">

          <p className="text-sm font-semibold tracking-widest text-red-600 uppercase">
            Chhabra Properties Insights
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            Latest Blogs
          </h1>

          <p className="max-w-2xl mx-auto text-gray-700 mt-5">
            Read the latest real estate insights,
            property updates, Noida news and
            investment information.
          </p>

        </div>


        {/* =====================================
            LOADING
        ===================================== */}

        {loading && (

          <div className="text-center py-20">

            <p className="text-gray-500">
              Loading blogs...
            </p>

          </div>

        )}


        {/* =====================================
            ERROR
        ===================================== */}

        {!loading && error && (

          <div className="text-center py-20">

            <h2 className="text-2xl font-semibold text-red-500">
              Unable to load blogs
            </h2>

            <p className="text-gray-500 mt-2">
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-5 px-5 py-2 bg-red-600 text-white rounded-lg"
            >
              Retry
            </button>

          </div>

        )}


        {/* =====================================
            EMPTY
        ===================================== */}

        {!loading &&
          !error &&
          blogs.length === 0 && (

            <div className="text-center py-20">

              <p className="text-gray-500">
                No blogs published yet.
              </p>

            </div>

          )}


        {/* =====================================
            BLOG CARDS
        ===================================== */}

        {!loading &&
          !error &&
          blogs.length > 0 && (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {blogs.map((blog) => (

                <article
                  key={
                    blog.id ||
                    blog._id ||
                    blog.slug
                  }
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    hover:shadow-2xl
                    transition
                    duration-300
                  "
                >


                  {/* =========================
                      IMAGE
                  ========================= */}

                  {blog.image ? (

                    <div
                      className="overflow-hidden cursor-pointer"
                      onClick={() => openBlog(blog)}
                    >

                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="
                          w-full
                          h-54
                          object-cover
                          group-hover:scale-105
                          transition
                          duration-500
                        "
                      />

                    </div>

                  ) : (

                    <div
                      className="
                        w-full
                        h-60
                        bg-gray-100
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                      "
                      onClick={() => openBlog(blog)}
                    >

                      <span className="text-gray-400">
                        No Image
                      </span>

                    </div>

                  )}


                  {/* =========================
                      CONTENT
                  ========================= */}

                  <div className="p-6">


                    {/* CATEGORY */}

                    {blog.category && (

                      <span className="text-sm font-semibold text-blue-600">

                        {blog.category}

                      </span>

                    )}


                    {/* TITLE */}

                    <h2 className="text-2xl font-bold mt-3 line-clamp-2">

                      {blog.title}

                    </h2>


                    {/* DESCRIPTION */}

                    <p className="text-gray-600 mt-3 line-clamp-3">

                      {blog.description}

                    </p>


                    {/* AUTHOR */}

                    <div className="flex items-center justify-between mt-6">

                      <span className="text-sm text-gray-400">

                        {blog.author}

                      </span>


                      {/* READ MORE */}

                      <button
                        onClick={() => openBlog(blog)}
                        className="
                          font-semibold
                          text-red-600
                          hover:text-red-800
                          transition
                          cursor-pointer
                        "
                      >

                        Read More →

                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

      </div>


      {/* =====================================================
          BLOG FULL CONTENT POPUP
      ===================================================== */}

      {selectedBlog && (

        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/70
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
            md:p-8
          "
          onClick={closeBlog}
        >


          {/* =====================================
              POPUP CONTAINER
          ===================================== */}

          <div
            className="
              relative
              w-full
              max-w-6xl
              max-h-[95vh]
              overflow-y-auto
              bg-white
              rounded-3xl
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >


            {/* =====================================
                CLOSE BUTTON
            ===================================== */}

            <button
              onClick={closeBlog}
              className="
                fixed
                md:absolute
                top-5
                right-5
                z-50
                w-11
                h-11
                rounded-full
                bg-black/70
                text-white
                text-2xl
                flex
                items-center
                justify-center
                hover:bg-red-600
                transition
              "
            >

              ×

            </button>


            {/* =====================================
                FULL IMAGE
            ===================================== */}

            {selectedBlog.image && (

              <div className="w-full bg-black">

                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="
                    w-full
                    max-h-[600px]
                    object-contain
                    mx-auto
                  "
                />

              </div>

            )}


            {/* =====================================
                BLOG CONTENT
            ===================================== */}

            <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">


              {/* CATEGORY */}

              {selectedBlog.category && (

                <span
                  className="
                    inline-block
                    text-sm
                    font-bold
                    tracking-wider
                    uppercase
                    text-red-600
                  "
                >

                  {selectedBlog.category}

                </span>

              )}


              {/* TITLE */}

              <h1
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-gray-900
                  mt-4
                  leading-tight
                "
              >

                {selectedBlog.title}

              </h1>


              {/* AUTHOR + DATE */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                  items-center
                  text-gray-500
                  mt-5
                "
              >

                {selectedBlog.author && (

                  <span>
                    By {selectedBlog.author}
                  </span>

                )}


                {selectedBlog.author &&
                  selectedBlog.createdAt && (

                    <span>•</span>

                  )}


                {selectedBlog.createdAt && (

                  <span>

                    {new Date(
                      selectedBlog.createdAt
                    ).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}

                  </span>

                )}

              </div>


              {/* =====================================
                  FULL DESCRIPTION
              ===================================== */}

              {selectedBlog.description && (

                <p
                  className="
                    text-xl
                    md:text-2xl
                    text-gray-600
                    leading-relaxed
                    mt-8
                    font-medium
                  "
                >

                  {selectedBlog.description}

                </p>

              )}


              {/* =====================================
                  FULL BLOG CONTENT
              ===================================== */}

              {selectedBlog.content && (

                <div
                  className="
                    mt-10
                    text-lg
                    md:text-xl
                    text-gray-700
                    leading-8
                    whitespace-pre-line
                  "
                >

                  {selectedBlog.content}

                </div>

              )}


              {/* =====================================
                  BOTTOM CLOSE BUTTON
              ===================================== */}

              <div className="mt-12 pt-8 border-t">

                <button
                  onClick={closeBlog}
                  className="
                    px-7
                    py-3
                    bg-red-600
                    text-white
                    rounded-xl
                    font-semibold
                    hover:bg-red-700
                    transition
                  "
                >

                  Close Blog

                </button>

              </div>


            </div>

          </div>

        </div>

      )}

    </section>

  );

}