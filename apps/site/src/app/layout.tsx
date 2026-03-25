import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NimbusGlide — AI Dictation That Thinks",
  description:
    "Context-aware voice dictation that understands what you mean, not just what you say. Say 'NimbusGlide' to switch modes instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-800 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
