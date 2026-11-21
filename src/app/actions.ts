"use server";

import { revalidatePath } from "next/cache";
import { allMenuItems } from "@/data/menu";

const FALLBACK_ERROR =
  "Sorry, we couldn't send that right now. Please call or WhatsApp us on +260 771036277.";

const field = (formData: FormData, key: string) => ((formData.get(key) as string) || "").trim();

/**
 * Sends a submission to the Google Apps Script web app
 * (scripts/google-apps-script/Code.gs), which saves it to the Google Sheet
 * and emails the restaurant and the customer.
 */
async function sendToGoogleSheet(type: "reservation" | "contact" | "order", data: Record<string, string>) {
  const url = process.env.GOOGLE_SCRIPT_URL;
  const secret = process.env.GOOGLE_SCRIPT_SECRET;
  if (!url || !secret) {
    console.error("[bookings] GOOGLE_SCRIPT_URL / GOOGLE_SCRIPT_SECRET are not set — submission not saved", type);
    return false;
  }
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ type, secret, ...data }),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(20000),
    });
    const result = await res.json().catch(() => null);
    if (!res.ok || !result?.ok) {
      console.error("[bookings] Google Script rejected the submission", res.status, result);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[bookings] Could not reach Google Script", err);
    return false;
  }
}

export async function createReservation(formData: FormData) {
  const name = field(formData, "name");
  const email = field(formData, "email");
  const phone = field(formData, "phone");
  const dateStr = field(formData, "date");
  const timeStr = field(formData, "time");
  const partySizeStr = field(formData, "partySize");

  if (!name || !email || !phone || !dateStr || !timeStr || !partySizeStr) {
    return { error: "All fields are required" };
  }

  const saved = await sendToGoogleSheet("reservation", {
    name,
    email,
    phone: `${field(formData, "countryCode")} ${phone}`.trim(),
    date: dateStr,
    time: timeStr,
    partySize: partySizeStr,
    seating: field(formData, "seating"),
    requests: field(formData, "requests"),
  });

  return saved ? { success: true } : { error: FALLBACK_ERROR };
}

export async function submitContact(formData: FormData) {
  const name = field(formData, "name");
  const email = field(formData, "email");
  const message = field(formData, "message");

  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  const saved = await sendToGoogleSheet("contact", {
    name,
    email,
    phone: field(formData, "phone"),
    subject: field(formData, "subject"),
    message,
  });

  return saved ? { success: true } : { error: FALLBACK_ERROR };
}

export interface OrderInput {
  mode: "dine-in" | "takeaway" | "delivery";
  name: string;
  phone: string;
  email?: string;
  table?: string;
  address?: string;
  notes?: string;
  items: { menuItemId: string; variant?: string; quantity: number }[];
}

const DELIVERY_FEE = 30;

export async function placeOrder(input: OrderInput) {
  const name = (input.name || "").trim();
  const phone = (input.phone || "").trim();
  const address = (input.address || "").trim();
  if (!name || !phone) return { error: "Please enter your name and phone number." };
  if (input.mode === "delivery" && !address) return { error: "Please enter a delivery address." };
  if (!Array.isArray(input.items) || input.items.length === 0) return { error: "Your cart is empty." };

  // Prices come from the menu on the server, never from the browser.
  const lines: { label: string; qty: number; unit: number }[] = [];
  const unavailable: string[] = [];
  for (const line of input.items) {
    const item = allMenuItems.find(m => m.id === line.menuItemId);
    const qty = Math.floor(Number(line.quantity));
    if (!item || !(qty > 0 && qty <= 50)) { unavailable.push(line.menuItemId); continue; }
    const variant = line.variant ? item.variants?.find(v => v.label === line.variant) : undefined;
    if (line.variant && !variant) { unavailable.push(item.name); continue; }
    lines.push({
      label: variant ? `${item.name} (${variant.label})` : item.name,
      qty,
      unit: variant ? variant.price : item.basePrice,
    });
  }
  if (unavailable.length) {
    return { error: "Some items in your cart are no longer on the menu. Please remove them and try again." };
  }

  const subtotal = lines.reduce((n, l) => n + l.qty * l.unit, 0);
  const deliveryFee = input.mode === "delivery" ? DELIVERY_FEE : 0;
  const orderId = "MOS-" + Date.now().toString(36).toUpperCase().slice(-6);
  const modeLabel = { "dine-in": "Dine-in", takeaway: "Takeaway", delivery: "Delivery" }[input.mode] || input.mode;

  const saved = await sendToGoogleSheet("order", {
    orderId,
    mode: modeLabel,
    name,
    phone,
    email: (input.email || "").trim(),
    table: input.mode === "dine-in" ? (input.table || "").trim() : "",
    address: input.mode === "delivery" ? address : "",
    notes: (input.notes || "").trim(),
    items: lines.map(l => `${l.qty} × ${l.label} @ ZK ${l.unit} = ZK ${l.qty * l.unit}`).join("\n"),
    subtotal: String(subtotal),
    deliveryFee: String(deliveryFee),
    total: String(subtotal + deliveryFee),
  });

  return saved ? { success: true, orderId } : { error: FALLBACK_ERROR };
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
    return;
  }
  
  // MOCK: Pretend it succeeded
  revalidatePath("/admin/settings");
}
