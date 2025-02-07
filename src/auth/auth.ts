import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// import { getMembership } from "@/http/get-membership";
// import { getProfile } from "@/http/get-profile";

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return !!cookieStore.get("token")?.value;
}

// export async function getCurrentOrg() {
//   const cookieStore = await cookies();
//   return cookieStore.get("org")?.value ?? null;
// }

// export async function getCurrentMembership() {
//   const org = getCurrentOrg();

//   if (!org) {
//     return null;
//   }

//   const { membership } = await getMembership(org);

//   return membership;
// }

export async function auth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/auth/sign-in");
  }

  // try {
  //   const { user } = await getProfile();

  //   return { user };
  // } catch {}

  redirect("/api/auth/sign-out");
}
