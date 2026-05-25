import "~/app/globals.css";
import { type Viewport, type Metadata } from "next";
import localFont from "next/font/local";
import TopNav from "~/components/TopNav";
import { cn } from "~/lib/utils";

const canelaDeck = localFont({
  src: [
    { path: "../../public/fonts/CanelaDeck.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/CanelaDeck-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-canela-deck",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://ryanbarrs.com"
  ),
  title: "Ryan Barrs",
  description: "Bioengineering PhD in Charleston, SC",
  openGraph: {
    title: "Ryan Barrs",
    description: "Bioengineering PhD in Charleston, SC",
    siteName: "Ryan Barrs",
    type: "website",
    images: [{ url: "/open-graph-image.png", width: 1200, height: 630, alt: "Preview image for ryanbarrs.com" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#55657F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={canelaDeck.variable}>
      <body className={cn(
        "antialiased", 
        "flex flex-col h-screen w-full items-center"
      )}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
