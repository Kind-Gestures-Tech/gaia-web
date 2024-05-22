import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request
  let hostname = req.headers.get("host")!.split(":")[0];
  if (!hostname) return;
  // Extract the subdomain
  const subdomain = hostname.split(".")[0];

  // Get the current pathname and search params
  const path = `${url.pathname}${
    url.searchParams.toString().length > 0
      ? `?${url.searchParams.toString()}`
      : ""
  }`;

  // Check for session token
  const session = await getToken({ req });
  console.log(session);
  // Handle subdomain routing
  switch (subdomain) {
    case "admin":
    case "doctor":
    case "patient":
    case "app":
      return handleSubdomainRouting(session, path, subdomain, req, url);

    default:
      return handleDefaultRouting(session, path, hostname, req);
  }
}

function handleSubdomainRouting(
  session: any,
  path: string,
  subdomain: string,
  req: NextRequest,
  url: URL,
) {
  // Allow access to signin and register pages without session
  if (!session && (path === "/auth/signin" || path === "/auth/register")) {
    return NextResponse.next();
  }

  // Redirect to signin if no session and not on signin or register page
  if (!session) {
    const callbackUrl = encodeURIComponent(
      `${url.protocol}//${req.headers.get("host")}${url.pathname}${url.search}`,
    );
    return NextResponse.rewrite(
      new URL(`/auth/signin?callbackUrl=${callbackUrl}`, req.url),
    );
  }

  // Redirect to home if session exists and trying to access signin or register page
  if (session && (path === "/auth/signin" || path === "/auth/register")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Rewrite the path for subdomains
  return NextResponse.rewrite(new URL(`/${subdomain}${path}`, req.url));
}

function handleDefaultRouting(
  session: any,
  path: string,
  hostname: string,
  req: NextRequest,
) {
  // Special case for the root domain or localhost
  if (
    hostname === "localhost" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(new URL(`${path}`, req.url));
  }
  // Rewrite for other cases
  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}
