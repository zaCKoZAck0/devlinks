import { z } from "zod";
import { ActionState } from "~/lib/create-safe-action";
import { User } from "@prisma/client";
import { Login } from "./schema";

export type InputType = z.infer<typeof Login>;
export type ReturnType = ActionState<InputType, User>;
