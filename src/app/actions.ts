"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

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

  // Combine date and time
  const date = new Date(`${dateStr}T${timeStr}`);

  try {
    await prisma.reservation.create({
      data: {
        name,
        email,
        phone,
        date,
        partySize: parseInt(partySizeStr),
      },
    });
    
    // In a real app we'd trigger an email here
    return { success: true };
  } catch (error) {
    console.error("Error creating reservation:", error);
    return { error: "Failed to create reservation" };
  }
}

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  try {
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    });
    
    return { success: true };
  } catch (error) {
    console.error("Error submitting message:", error);
    return { error: "Failed to send message" };
  }
}
