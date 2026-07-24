// Central per-station branding. Copy this app to another station by changing
// only this file, the logo asset in /public, and NEXT_PUBLIC_STREAM_URL.
export const STATION = {
  name: "Do Eagle",
  liveName: "Do Eagle en Vivo",
  tagline: "La más Romántica",
  description:
    "Do Eagle Radio, la más romántica. Música, entretenimiento y buena compañía las 24 horas del día. 🇩🇴",
  location: "República Dominicana",
  website: "https://doeagleradio.com",
  shareText: "Escucha Do Eagle en vivo - La más Romántica",
  // Logo lives in /public. Always shown as the cover, never the album art.
  logo: "/doeagle.jpeg",
  themeColor: "#31536c",
  defaultBitrate: "192",
} as const;
