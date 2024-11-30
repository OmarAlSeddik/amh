import { z } from "zod";

export const FormSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required." }).max(64),
  lastName: z.string().min(1, { message: "Last Name is required." }).max(64),
  email: z.string().min(1, { message: "Email is required." }).max(64),
  phone: z.string().min(1, { message: "Phone is required." }).max(64),
  message: z.string().min(1, { message: "Message is required." }).max(1024),
});
