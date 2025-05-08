import { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { PrismaAdapter } from "./prisma-adapter";


export function buildNextAuthOptions(): NextAuthOptions {
  return {
    secret: process.env.NEXTAUTH_SECRET!,
    adapter: PrismaAdapter(),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_SECRET_KEY!,

        profile(profile: GoogleProfile) {
            return {
              id: profile.sub,
              name: profile.name,
              avatar_url: profile.avatar_url,
              email:profile.email
            };
          },
      }),
    ],

    callbacks: {
      async signIn() {
        return true;
      },

      async session({ session, user }) {
        return {
          ...session,
          user
        }
      }
    },
  };
}
