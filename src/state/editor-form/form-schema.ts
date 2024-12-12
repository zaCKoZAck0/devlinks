import { z } from "zod";
import { PLATFORMS } from "~/constants/platforms";

const platformKeys = Object.keys(PLATFORMS) as [string, ...string[]];

const linkSchema = z.object({
  index: z.number().positive(),
  platform: z.enum(platformKeys),
  url: z
    .string()
    .min(1, { message: "Can't be empty" })
    .url({ message: "Invalid url" }),
});

export const formSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  firstName: z.string().min(1, { message: "Can't be empty" }),
  profilePicture: z.string().url({ message: "Invalid image" }),
  lastName: z.string().min(1, { message: "Can't be empty" }),
  links: z.array(linkSchema),
});
