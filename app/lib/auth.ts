import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";
import { firebaseCert } from "./firebase";

const nextAuth = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebaseCert,
  }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  events: {},
  callbacks: {},
});

export const auth = nextAuth.auth;
export const handlers = nextAuth.handlers;
export const signIn = nextAuth.signIn;
export const signOut = nextAuth.signOut;
console.log("🔍 auth exportado:", auth);
