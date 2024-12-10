"use server";
import { signIn } from "~/auth";
import { Login } from "./schema";
import { InputType, ReturnType } from "./types";
import { prisma } from "~/lib/prisma";
import { createSafeAction } from "~/lib/create-safe-action";
import { AuthError } from "next-auth";

const handler = async (data: InputType): Promise<ReturnType> => {
  let user;
  try {
    await signIn("credentials", data);

    user = await prisma.user.findFirstOrThrow({
      where: {
        email: data.email,
      },
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "incorrect email or password",
          };
        default:
          return {
            error: "unknown error",
          };
      }
    }
    throw error;
  }
  return { data: { ...user, password: null } };
};

export const login = createSafeAction(Login, handler);
