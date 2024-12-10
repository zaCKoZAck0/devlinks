import { z } from "zod";

export const Login = z.object({
  email: z
    .string()
    .min(1, { message: "Can't be empty" })
    .email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Can't be empty" }),
});
