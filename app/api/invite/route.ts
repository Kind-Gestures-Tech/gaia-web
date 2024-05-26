import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { sendEmail } from "~/utils/sendmail";

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
  const { email, role, workspaceId } = await req.json();

  const token = uuidv4(); // Generate a unique token for the invitation
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // Set expiration to 7 days from now

  try {
    const invitation = await prisma.workspaceInvitation.create({
      data: {
        email,
        role,
        token,
        expiresAt,
        workspaceId,
      },
    });
    const subject = "You've been invited!";
    const text = `You have been invited to join the workspace. Use this token to accept the invitation: ${token}`;
    const html = `<p>You have been invited to join the workspace.</p><p>Use this token to accept the invitation: <strong>${token}</strong></p>`;

    await sendEmail({ to: email, subject, text, html });
    return NextResponse.json(invitation, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create invitation" },
      { status: 500 },
    );
  }
}
