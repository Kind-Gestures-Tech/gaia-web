import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      company,
      purpose,
      telemetry,
      patientSelfHelp,
      useOfApis,
      aiModels,
      apiUrl,
      vectorDbUrl,
      userId,
    } = req.body;

    try {
      const user = await prisma.user.update({
        where: { id: userId },
        data: {
          company: {
            create: {
              name: company,
              purpose,
              telemetry,
            },
          },
          isConfigured: true,
          Configuration: {
            create: {
              useOfApis,
              telemetryEnabled: telemetry,
              patientSelfHelp,
              aiModels,
              apiUrl,
              vectorDbUrl,
            },
          },
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to save configuration" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
