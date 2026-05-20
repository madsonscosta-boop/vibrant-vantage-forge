// Edite estes valores para o seu contato real.
// O número do WhatsApp deve estar no formato internacional, só dígitos (ex.: 5511999999999).
export const EMAIL = "hello@figtheagency.com";

export const mailtoLink = (subject = "Contato pelo site FIG", body = "") =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
