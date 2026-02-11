import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name should at least have 2 characters" })
    .max(50, { message: "Name should not exceed 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Please enter detailed message (at least 10 character)" })
    .max(1000, { message: "Message should not exceed 1000 characters" }),
});
