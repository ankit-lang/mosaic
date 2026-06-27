"use server";

import { revalidatePath } from "next/cache";

export async function createReservation(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const dateStr = formData.get("date") as string;
  const timeStr = formData.get("time") as string;
  const partySizeStr = formData.get("partySize") as string;

  if (!name || !email || !phone || !dateStr || !timeStr || !partySizeStr) {
    return { error: "All fields are required" };
  }

  // MOCK: Always return success for now
  return { success: true };
}

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  // MOCK: Always return success for now
  return { success: true };
}

export async function getUsers() {
  // MOCK: Return empty array or dummy users
  return [
    { id: 1, name: "Admin", email: "admin@mosaic.com", createdAt: new Date() }
  ];
}

export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  if (!name || !email) {
    return { error: "Name and email are required" };
  }
  
  // MOCK: Pretend it succeeded
  revalidatePath("/admin/settings");
  return { success: true };
}
