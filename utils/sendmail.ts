import axios from "axios";
import sgMail from "@sendgrid/mail";

// Configuration from environment variables
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const EXTERNAL_API_URL = "https://mail.kindhealth.tech/api/send";
const SMTP_USERNAME = process.env.SMTP_USERNAME;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const SMTP_SERVER = process.env.SMTP_SERVER;

sgMail.setApiKey(SENDGRID_API_KEY || "");

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  if (SENDGRID_API_KEY && SMTP_USERNAME && SMTP_PASSWORD && SMTP_SERVER) {
    try {
      // Send email using SendGrid
      const msg = {
        to: options.to,
        from: "noreply@yourdomain.com", // Replace with your verified sender
        subject: options.subject,
        text: options.text,
        html: options.html,
      };
      await sgMail.send(msg);
      console.log("Email sent using SendGrid");
    } catch (error) {
      console.error("Error sending email with SendGrid:", error);
      throw new Error("Failed to send email with SendGrid");
    }
  } else {
    try {
      // Send email using external API
      await axios.post(EXTERNAL_API_URL, {
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });
      console.log("Email sent using external API");
    } catch (error) {
      console.error("Error sending email with external API:", error);
      throw new Error("Failed to send email with external API");
    }
  }
}
