export type ContactLocation = "navbar_desktop" | "navbar_mobile" | "hero" | "system" | "final_cta";

export function trackMetaContact(location: ContactLocation) {
  try {
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;

    if (typeof fbq !== "function") return;

    fbq("track", "Contact", {
      content_name: "Sistema Industrial",
      cta_location: location,
    });
  } catch {
    // Tracking must never interrupt the visitor's path to WhatsApp.
  }
}
