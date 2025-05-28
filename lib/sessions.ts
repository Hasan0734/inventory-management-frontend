"use server";
import { cookies } from "next/headers";

export async function createSession(name: string, userToken: string) {
  const expiresAt = new Date(Date.now() * 7 * 24 * 60 * 60 * 1000);
  const session = userToken;
  const cookieStore = await cookies();
  console.log(session);

  cookieStore.set(name, session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const session = (await cookies()).get("session")?.value;

  if (!session) return null;
  return session;
}
