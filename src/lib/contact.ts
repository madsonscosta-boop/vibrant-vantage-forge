// Edite estes valores para o seu contato real.
// O número do WhatsApp deve estar no formato internacional, só dígitos (ex.: 5511999999999).
export const WHATSAPP_NUMBER = "5511999999999";
export const EMAIL = "ola@fig.agency";

export const whatsappLink = (message = "Olá! Vim pelo site da FIG.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject = "Contato pelo site FIG", body = "") =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
