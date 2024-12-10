"use server";
import { signIn } from "~/auth";
import { CreateAccount } from "./schema";
import { InputType, ReturnType } from "./types";
import { prisma } from "~/lib/prisma";
import { createSafeAction } from "~/lib/create-safe-action";
import { AuthError } from "next-auth";
import brcrypt from "bcryptjs";

const handler = async (data: InputType): Promise<ReturnType> => {
  let user;

  try {
    user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (!!user) throw new AuthError("CredentialsSignin");

    const salt = await brcrypt.genSalt(10);
    const hashedPassword = await brcrypt.hash(data.password, salt);

    user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    });

    await signIn("credentials", data);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "email already registered",
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

export const createAccount = createSafeAction(CreateAccount, handler);
