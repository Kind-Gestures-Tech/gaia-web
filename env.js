(async () => {
  const { createEnv } = await import("@t3-oss/env-nextjs");
  const { z } = await import("zod");

  const env = createEnv({
    server: {
      DATABASE_URL: z.string().url(),
      NEXTAUTH_SECRET: z.string(),
      ELEVENLABS_API_KEY: z.string(),
      NODE_ENV: z.string(),
      GOOGLE_CLIENT_ID: z.string(),
      GOOGLE_CLIENT_SECRET: z.string(),

      // Add other server environment variables here
    },
    client: {
      NEXT_PUBLIC_API_URL: z.string().url(),
      NEXT_PUBLIC_ADMIN_URL: z.string().url(),
      NEXT_PUBLIC_DOCTOR_URL: z.string().url(),
      NEXT_PUBLIC_PATIENT_URL: z.string().url(),

      // Add other client environment variables here
    },
    runtimeEnv: {
      DATABASE_URL: process.env.DATABASE_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NEXT_PUBLIC_ADMIN_URL: process.env.NEXT_PUBLIC_ADMIN_URL,
      NEXT_PUBLIC_DOCTOR_URL: process.env.NEXT_PUBLIC_DOCTOR_URL,
      NEXT_PUBLIC_PATIENT_URL: process.env.NEXT_PUBLIC_PATIENT_URL,
      ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
      NODE_ENV: process.env.NODE_ENV,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      // Add other runtime environment variables here
    },
  });

  module.exports = { env };
})();
