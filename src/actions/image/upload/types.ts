import { z } from "zod";
import { ActionState } from "~/lib/create-safe-action";
import { ImageUploadSchema } from "./schema";

export type InputType = z.infer<typeof ImageUploadSchema>;
export type ReturnType = ActionState<InputType, string>;
