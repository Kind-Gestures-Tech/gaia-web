import { getProviders, signIn, useSession, getSession } from "next-auth/react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

type SignInProps = {
  providers: Record<string, any>;
};

const SignIn: React.FC<SignInProps> = ({ providers }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      switch (session.user.role) {
        case "SYSTEM_ADMIN":
          router.push(process.env.NEXT_PUBLIC_ADMIN_URL);
          break;
        case "DOCTOR":
          router.push(process.env.NEXT_PUBLIC_DOCTOR_URL);
          break;
        case "PATIENT":
          router.push(process.env.NEXT_PUBLIC_PATIENT_URL);
          break;
        default:
          router.push("/");
      }
    }
  }, [session, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.reload(); // Reload the page to ensure session is updated
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-6 rounded bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold">Sign In</h2>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
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
              Sign in
            </button>
          </div>
        </form>
        <div className="space-y-4">
          {Object.values(providers).map((provider) => {
            if (provider.name !== "Credentials") {
              return (
                <div key={provider.name} className="text-center">
                  <button
                    onClick={() => signIn(provider.id)}
                    className="mt-2 w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:border-blue-300 focus:outline-none focus:ring"
                  >
                    Sign in with {provider.name}
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="text-blue-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  const session = await getSession(context);

  // Redirect if the user is already logged in
  if (session) {
    const { user } = session;
    let redirectUrl = "/";
    switch (user.role) {
      case "SYSTEM_ADMIN":
        redirectUrl = process.env.NEXT_PUBLIC_ADMIN_URL!;
        break;
      case "DOCTOR":
        redirectUrl = process.env.NEXT_PUBLIC_DOCTOR_URL!;
        break;
      case "PATIENT":
        redirectUrl = process.env.NEXT_PUBLIC_PATIENT_URL!;
        break;
    }
    return {
      redirect: {
        destination: redirectUrl,
        permanent: false,
      },
    };
  }

  return {
    props: { providers },
  };
};

export default SignIn;
