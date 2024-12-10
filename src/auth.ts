import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "~/lib/prisma";
import bcrypt from "bcryptjs";
import { User } from "@prisma/client";

async function getUser(email: string, password: string): Promise<User | null> {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password || "");

  if (!isValid) return null;

  return user;
}

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const user = await getUser(
          credentials.email as string,
          credentials.password as string,
        );

        return user ?? null;
      },
    }),
  ],
});
