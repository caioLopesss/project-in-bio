"use server";
import { auth, signIn, signOut } from "@/app/lib/auth";

export default async function ManageAuth() {
  console.log("🔍 Chamando auth...");
  const session = await auth();
  console.log("🔍 Sessão:", session);

  if (!session) {
    console.log("🔍 Nenhuma sessão encontrada, fazendo signIn...");
    return await signIn("google", {
      redirectTo: "/criar",
    });
  }

  console.log("🔍 Sessão encontrada, fazendo signOut...");
  return await signOut({
    redirectTo: "/",
  });
}
