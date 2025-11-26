import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://swizzcutz-landing.vercel.app"),

  title: {
    default: "Swizz Cutz – Premium Mobile Barber in Jos",
    template: "%s | Swizz Cutz",
  },

  description:
    "Premium mobile barber in Jos City. Clean fades, sharp line-ups, beard grooming, kids cuts, and home-service bookings via WhatsApp.",

  keywords: [
    "mobile barber Jos",
    "barber Jos Nigeria",
    "Swizz Cutz",
    "Swizz Cuts",
    "home service barber Jos",
    "fades in Jos",
    "line up barber Jos",
    "beard grooming Jos",
    "kids haircut Jos",
    "barber near me Jos",
  ],

  openGraph: {
    title: "Swizz Cutz – Premium Mobile Barber in Jos",
    description:
      "Professional home-service barber in Jos City. Clean fades, line-ups, beard trims & more.",
    url: "https://swizzcutz-landing.vercel.app",
    siteName: "Swizz Cutz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Swizz Cutz – Premium Mobile Barber in Jos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Swizz Cutz – Premium Mobile Barber",
    description: "Clean fades & sharp grooming delivered to you in Jos City.",
    images: ["/og-image.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://swizzcutz-landing.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        {children}

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: "Swizz Cutz",
              description:
                "Mobile barber providing fades, line-ups, beard grooming, and kids cuts in Jos City.",
              areaServed: "Jos, Nigeria",
              url: "https://swizzcutz-landing.vercel.app",
              telephone: "+234XXXXXXXXXX",
              priceRange: "$$",
              serviceType: ["Haircut", "Fade", "Beard Grooming", "Kids Cut"],
            }),
          }}
        />
      </body>
    </html>
  );
}
