import { business } from "@/config/site";

export type EnquiryData = {
  name: string;
  checkIn: string; // yyyy-mm-dd
  checkOut: string; // yyyy-mm-dd
  guests: string;
  roomPreference: string;
  message?: string;
};

/** Format yyyy-mm-dd as a readable date, e.g. "12 October 2026" */
export function formatDate(iso: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${d} ${months[m - 1]} ${y}`;
}

/**
 * Builds the exact WhatsApp enquiry message format agreed for the
 * Ha La Tyngkong Stay Inn preview demo. The closing line asks the inn
 * to confirm availability and the current total price — availability is
 * NEVER implied by the website itself.
 */
export function buildWhatsAppMessage(data: EnquiryData): string {
  const lines = [
    "Hello Ha La Tyngkong Stay Inn,",
    "",
    "I would like to check room availability.",
    "",
    `Name: ${data.name}`,
    `Check-in: ${formatDate(data.checkIn)}`,
    `Check-out: ${formatDate(data.checkOut)}`,
    `Guests: ${data.guests}`,
    `Room type: ${data.roomPreference}`,
    `Message: ${data.message?.trim() ? data.message.trim() : "-"}`,
    "",
    "Please confirm availability and the current total price. Thank you.",
  ];
  return lines.join("\n");
}

export function buildWhatsAppUrl(data: EnquiryData): string {
  const text = encodeURIComponent(buildWhatsAppMessage(data));
  return `${business.whatsappBase}?text=${text}`;
}

/** Simple WhatsApp link with optional short greeting */
export function whatsappLink(
  text = "Hello Ha La Tyngkong Stay Inn, I have an enquiry."
): string {
  return `${business.whatsappBase}?text=${encodeURIComponent(text)}`;
}
