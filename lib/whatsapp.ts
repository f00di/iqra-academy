export const ACADEMY_WHATSAPP_NUMBER = "+923135249881";

export function formatWhatsAppNumber(number = ACADEMY_WHATSAPP_NUMBER) {
  return number.replace(/\D/g, "");
}

export function createWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${formatWhatsAppNumber()}?text=${encodedMessage}`;
}
