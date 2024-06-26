import { useState } from "react";
import Head from "next/head";
import { Bot, HeartPulse, PersonStanding } from "lucide-react";
import { useSession } from "next-auth/react";
import { MainNav } from "components/navbar"; // Adjust the path as needed

export default function Home() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Bot size={50} />,
      featureName: "Bot for Personal Medical Queries",
      shortDescription:
        "Access to answer personal medical queries and provide citations from trusted sources.",
    },
    {
      icon: <HeartPulse size={50} />,
      featureName: "Mental Health Support and Coping Strategies",
      shortDescription:
        "Receive mental health support through relaxation techniques, medical assistance and personal companionship.",
    },
    {
      icon: <PersonStanding size={50} />,
      featureName: "Personalised 3D Characters & Voice Support",
      shortDescription:
        "Experience personalization with animated 3D characters and local language voice support.",
    },
  ];

  return (
    <>
      <Head>
        <title>Gaia - Your Healthcare Support</title>
        <meta
          name="description"
          content="Your all-in-one solution for personalized health recommendations, reliable medical insights, mental health support, and interactive 3D character guidance."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <MainNav />
        </header>
        <main className="min-h-screen">
          <div className="relative isolate">
            <svg
              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              />
            </svg>
            <div
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
              aria-hidden="true"
            >
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                }}
              />
            </div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      Our product is open to a select few
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                      Register now to gain access to our exclusive healthcare
                      support features.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="/auth/register"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Register
                      </a>
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Join the waitlist <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-1">
                      {features.map((feature) => (
                        <div
                          className="flex max-w-md items-start justify-center gap-5 rounded-lg border-black  p-5 dark:bg-slate-900 md:flex-row"
                          key={feature.featureName}
                        >
                          <div>{feature.icon}</div>
                          <div className="flex flex-col gap-1">
                            <h2 className="text-xl font-bold lg:text-2xl">
                              {feature.featureName}
                            </h2>
                            <p className="lg:text-md text-sm text-gray-500">
                              {feature.shortDescription}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
