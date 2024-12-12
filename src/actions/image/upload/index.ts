"use server";

import fs from "node:fs/promises";
import path from "path";
import sharp from "sharp";
import { InputType, ReturnType } from "./types";
import { createSafeAction } from "~/lib/create-safe-action";
import { ImageUploadSchema } from "./schema";

const UPLOAD_DIR = path.join(process.cwd(), "public/uploads");

const handler = async (data: InputType): Promise<ReturnType> => {
  if (!data.image) {
    throw new Error("No file provided");
  }

  // Validate file type
  const allowedTypes = ["image/jpeg", "image/png"];
  if (!allowedTypes.includes(data.image.type)) {
    throw new Error("Invalid file type. Only PNG and JPG formats are allowed.");
  }

  // Convert file to a buffer for processing
  const arrayBuffer = await data.image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Use sharp to validate dimensions and format
  const metadata = await sharp(buffer).metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error("Invalid image file.");
  }

  if (metadata.width > 1024 || metadata.height > 1024) {
    throw new Error("Image dimensions must be below 1024x1024 pixels.");
  }

  // Todo: Upload the image to a cloud storage service

  // Ensure the upload directory exists
  await fs.mkdir(UPLOAD_DIR, { recursive: true });

  // Save the file locally
  const filePath = path.join(UPLOAD_DIR, data.image.name);
  await fs.writeFile(filePath, buffer);

  const relativePath = `/uploads/${data.image.name}`;

  return { data: relativePath };
};

export const uploadImage = createSafeAction(ImageUploadSchema, handler);
