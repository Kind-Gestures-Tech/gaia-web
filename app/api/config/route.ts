import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 405,
    },
  );
}

export async function POST(req: Request) {
  const {
    company,
    purpose,
    telemetry,
    patientSelfHelp,
    useOfApis,
    aiModels,
    selectedEmbedding,
    apiUrl,
    vectorDbUrl,
    userId,
  } = await req.json();

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
            selectedEmbedding,
            apiUrl,
            vectorDbUrl,
          },
        },
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save configuration" },
      { status: 500 },
    );
  }
}
