// Edit these values for your real contact info.
export const EMAIL = "hello@figtheagency.com";

export const mailtoLink = (subject = "Contact from FIG website", body = "") =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
