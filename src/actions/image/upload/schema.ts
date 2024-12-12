import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const ImageUploadSchema = z.object({
  image: z
    .custom<File>()
    .refine((image) => ACCEPTED_IMAGE_TYPES.includes(image.type)),
});
