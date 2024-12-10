import { z } from "zod";
import { ActionState } from "~/lib/create-safe-action";
import { User } from "@prisma/client";
import { CreateAccount } from "./schema";

export type InputType = z.infer<typeof CreateAccount>;
export type ReturnType = ActionState<InputType, User>;
