import type { Metadata } from "next";
import "../core/styles/globals.css";
import "../core/styles/tailwind-config.css";

export const metadata: Metadata = {
  title: "LAV",
  description: "Lav.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className={`font-baseText antialiased`}>{children}</body>
    </html>
  );
}
