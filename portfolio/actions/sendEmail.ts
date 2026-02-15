"use server";

import React from "react";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/formSchema";
import ContactFormEmail from "@/emails/contactFormEmail";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    console.log(
      "Validation Failed:",
      validatedFields.error.flatten().fieldErrors,
    );
    return {
      success: false,
      message: "Please Enter Valid Details!",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data; // As safeparse is a zod func. that return either success and data or success and error.

  try {
    // Render the Email Template
    const emailContent = React.createElement(ContactFormEmail, {
      name,
      email,
      message,
    });

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Mandatory for client's without domain huh.
      to: "pranavpargi32@gmail.com",
      replyTo: email,
      subject: `New Message from ${name}`,
      react: emailContent,
    });

    if (error) {
      console.error("Resend Error:", error);
      return {
        success: false,
        message: "Failed to send email. Server error.",
        errors: {},
      };
    }
    return {
      success: true,
      message: "Email sent successfully!",
      errors: {},
    };
  } catch (error) {
    console.error("Crash Error:", error);
    return {
      success: false,
      message: "Something went wrong on the server.",
      errors: {},
    };
  }
};
