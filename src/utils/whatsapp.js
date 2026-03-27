const DEFAULT_PHONE = "595975123030";

export const buildWhatsAppUrl = (message) => {
  const text = message?.trim() || "";
  return `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(text)}`;
};

export const appelInquiryMessage = (topic) =>
  `Vengo desde la web appelneumaticos.com y quiero más información sobre ${topic}.`;
