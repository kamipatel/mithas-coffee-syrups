import "./globals.css";

export const metadata = {
  title: "Mithas — Handcrafted Coffee Syrups",
  description:
    "Flavors that feel like home. Handcrafted coffee syrups inspired by desi childhood desserts. Made with love in Austin, TX.",
  openGraph: {
    title: "Mithas — Handcrafted Coffee Syrups",
    description:
      "Flavors that feel like home. Handcrafted coffee syrups inspired by desi childhood desserts.",
    url: "https://mithas.co",
    siteName: "Mithas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithas — Handcrafted Coffee Syrups",
    description:
      "Flavors that feel like home. Handcrafted coffee syrups inspired by desi childhood desserts.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
