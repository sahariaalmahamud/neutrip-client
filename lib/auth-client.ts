import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // e.g. https://neutrip-server.onrender.com
    fetchOptions: {
        credentials: "include", // <--- CRITICAL: Allows cross-origin session/state cookies
    },
});

export const { useSession, signIn, signOut, signUp } = authClient;