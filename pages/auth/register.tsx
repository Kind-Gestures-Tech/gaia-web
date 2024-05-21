// pages/auth/register.tsx
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const host = window.location.host;
    const subdomain = host.split(".")[0];

    let detectedRole;
    switch (subdomain) {
      case "admin":
        detectedRole = "SYSTEM_ADMIN";
        break;
      case "doctor":
        detectedRole = "DOCTOR";
        break;
      case "patient":
        detectedRole = "PATIENT";
        break;
      default:
        detectedRole = "PATIENT"; // default role if subdomain does not match
    }

    setRole(detectedRole);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("/api/auth/register", {
        email,
        password,
        name,
        role,
      });
      if (response.status === 200) {
        router.push("/auth/signin");
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-6 rounded bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold">Register</h2>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:border-blue-300 focus:outline-none focus:ring"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/auth/signin" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
