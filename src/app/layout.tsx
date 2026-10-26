import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { organizationSchema } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/shared/BackToTop";
import { JsonLd } from "@/components/shared/JsonLd";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Celebration & Event Studio in Mumbai`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    images: [{ url: site.ogImage, width: 1600, height: 1067, alt: site.tagline }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#f5efe6",
  colorScheme: "light",
};

// Flags the document so CSS can pre-hide animated elements before hydration.
// Skipped entirely when the visitor prefers reduced motion. A timeout reveals
// everything if scripts never hydrate (slow network / JS error).
const motionFlag = `(function(){try{var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('js');setTimeout(function(){d.classList.add('js-timeout')},4000)}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ivory transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
