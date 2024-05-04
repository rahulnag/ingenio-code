import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Consult Ingenio",
  description: "Get consultation service from top developers of Ingenio",
  referrer: 'origin-when-cross-origin',
  keywords: ["Ingenio", "Hire developer"],
  authors: [{ name: 'Ingenio', url: process.env.WEB_URL }],
  creator: 'Ingenio',
  publisher: 'Ingenio',
  metadataBase: new URL(`${process.env.WEB_URL}`),
  alternates: {
    canonical: `${process.env.WEB_URL}`,
  },
  openGraph: {
    title: "Consult Ingenio",
    description: "Get consultation service from top developers of Ingenio",
    url: process.env.WEB_URL,
    siteName: "Ingenio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: 'Ingenio',
    site: process.env.WEB_URL,
    title: 'Ingenio',
    description: "Get consultation service from top developers of Ingenio",
  }
};

export const viewport = {
  themeColor: '#05AFAF',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
