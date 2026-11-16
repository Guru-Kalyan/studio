import "./globals.css";

export const metadata = {
  title: "ZMX Films & Studio | Wedding Films & Commercial Productions",
  description:
    "ZMX Films & Studio creates cinematic wedding films, photography and commercial visual productions in Bhubaneswar, Odisha, and beyond.",
  applicationName: "ZMX Films & Studio",
  keywords: [
    "ZMX Films",
    "wedding photography Bhubaneswar",
    "wedding films Odisha",
    "pre-wedding photography",
    "commercial film production Bhubaneswar",
    "automobile films",
    "real estate videography",
  ],
  openGraph: {
    title: "ZMX Films & Studio | Every Frame. Feels Forever.",
    description:
      "Cinematic wedding stories and commercial films crafted with emotion, detail and purpose.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
