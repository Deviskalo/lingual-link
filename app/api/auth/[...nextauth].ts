import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // Add other providers as needed
  ],
  adapter: PrismaAdapter(prisma), // Use Prisma adapter
  callbacks: {
    async session({ session, token }) {
      console.log("Session callback:", { session, token });
      if (session.user) {
        session.user.id = token.sub as string; // Type assertion to string
      }
      return session;
    },
    async jwt({ token, user }) {
      console.log("JWT callback:", { token, user });
      if (user) {
        token.sub = user.id; // Attach user ID to token
      }
      return token;
    },
  },
});
