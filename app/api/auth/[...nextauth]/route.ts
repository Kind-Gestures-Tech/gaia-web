import NextAuth from "next-auth";
import { authOptions, logger } from "server/auth";

const handler = NextAuth(authOptions);
logger.info("Initializing NextAuth with handler:", handler);
export { handler as GET, handler as POST };
