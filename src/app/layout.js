import "./globals.css";
import { cormorantGaramond, outfit, dancingScript } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata = {
  title: {
    default: "Mithas \u2014 Handcrafted Coffee Syrups",
    template: "%s | Mithas",
  },
  description:
    "Flavors that feel like home. Handcrafted coffee syrups inspired by desi childhood desserts. Made with love in Austin, TX.",
  keywords: [
    "coffee syrups",
    "desi",
    "handcrafted",
    "Austin",
    "gulab jamun",
    "chai",
    "matcha",
    "UT Austin",
  ],
  openGraph: {
    title: "Mithas \u2014 Handcrafted Coffee Syrups",
    description:
      "Flavors that feel like home. Handcrafted coffee syrups inspired by desi childhood desserts.",
    url: "https://mithas.co",
    siteName: "Mithas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithas \u2014 Handcrafted Coffee Syrups",
    description:
      "Flavors that feel like home. Handcrafted coffee syrups inspired by desi childhood desserts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        cormorantGaramond.variable,
        outfit.variable,
        dancingScript.variable
      )}
    >
      <body className="bg-cream min-h-screen font-sans text-espresso">
        {children}
      </body>
    </html>
  );
}
