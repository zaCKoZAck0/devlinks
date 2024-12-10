import { z } from "zod";

export const CreateAccount = z
  .object({
    email: z
      .string()
      .min(1, { message: "Can't be empty" })
      .email({ message: "Invalid email" }),
    password: z.string().min(8, { message: "Too Short" }),
    confirmPassword: z.string().min(1, { message: "Can't be empty" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Didn't match",
    path: ["confirmPassword"],
  });
