import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://chhhabra-1.onrender.com";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const login = async (e) => {

    e.preventDefault();

    setError("");

    try {

      const response = await fetch(
        `${API}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {

        setError(data.detail || "Login failed");

        return;
      }

      localStorage.setItem(
        "adminToken",
        data.token
      );

      navigate("/admin/dashboard");

    } catch {

      setError("Server connection failed");

    }
  };


  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <form
        onSubmit={login}
        className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8"
      >

        <h1 className="text-3xl font-bold">
          Admin Login
        </h1>

        <p className="text-gray-500 mt-2">
          chhabra Blog Management
        </p>


        {error && (

          <div className="bg-red-50 text-red-600 p-3 rounded-xl mt-5">
            {error}
          </div>

        )}


        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full mt-6 px-4 py-3 border rounded-xl outline-none"
          required
        />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full mt-4 px-4 py-3 border rounded-xl outline-none"
          required
        />


        <button
          type="submit"
          className="w-full mt-6 bg-black text-white py-3 rounded-xl font-semibold"
        >
          Login
        </button>

      </form>

    </div>
  );
}
