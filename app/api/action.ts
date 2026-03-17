"use server";

import { z } from "zod";

export interface formState {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: string;
}
const contactForm = z.object({
  name: z.string().trim().min(1, { message: "Name field is required" }),
  email: z.string().email({ message: "Invalid email adress" }),
  message: z.string().trim().min(5, { message: "Please type in a message" }),
});

export async function sendMail(prevState: formState, formData: FormData) {
  const contactFormData = Object.fromEntries(formData);
  const validatedContactFormData = contactForm.safeParse(contactFormData);

  if (!validatedContactFormData.success) {
    const formFieldErrors =
      validatedContactFormData.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors?.name,
        email: formFieldErrors?.email,
        message: formFieldErrors?.message,
      },
    };
  }
  return {
    success: "Your message was sent successfully!",
  };
}
