import Head from "next/head";
import Link from "next/link";
import { MainNav } from "~/components/navbar";
import { Button } from "~/components/ui/button";
import { Bot, HeartPulse, MessagesSquare, PersonStanding } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export function useSession2(){
       const mockSession = {
           expires: new Date(Date.now() + 2 * 86400).toISOString(),
	       user: { name:"Admin", username: "admin", email:"johnsonchetty@gmail.com", id:1, image:"image.png" }
	       
	         };
		 	 
	return {data: mockSession, status: 'authenticated'};
}

export default function Home() {		
  const { data: session } = useSession();
  
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
      <main className="min-h-screen">
        <MainNav />
        <div className="h-screen flex w-screen flex-col items-center justify-center gap-10">
          <h1 className="flex items-center gap-2 text-3xl">
            Welcome, {session?.user?.name ?? "Guest, Please Login to continue"}!{" "}
            {session && (
              <Image
                src={session?.user.image ?? "/logo.png"}
                width={40}
                height={40}
                className="rounded-full"
                alt="User Image"
              />
            )}
          </h1>
          <div className="space-x-5">
            <Link href={session ? "/query" : "/api/auth/signin"}>
              <Button disabled={!session}>
                <MessagesSquare className="mr-2" />
                Ask Gaia
              </Button>
            </Link>

            <Link href={session ? "/support" : "/api/auth/signin"}>
              <Button disabled={!session}>
                <MessagesSquare className="mr-2" />
                Talk to Gaia
              </Button>
            </Link>
          </div>

          <h1 className="text-center text-3xl font-bold mt-5">Features</h1>
          <div className="flex flex-wrap justify-center gap-5">
            {features.map((feature) => (
              <div
                className="flex max-w-md items-start justify-center gap-5 rounded-lg border-black bg-slate-200 p-5 dark:bg-slate-900 md:flex-row"
                key={feature.featureName}
              >
                <div>{feature.icon}</div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl lg:text-2xl font-bold">{feature.featureName}</h2>
                  <p className="text-sm lg:text-md text-gray-500">{feature.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
