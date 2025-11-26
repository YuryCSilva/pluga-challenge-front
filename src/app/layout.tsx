import type { Metadata } from "next";
import "@/src/shared/styles/globals.css";

export const metadata: Metadata = {
  title: "Pluga Challenge Front",
  description: "Desafio técnico para a vaga de desenvolvedor frontend",
  icons: {
    icon: "https://assets.pluga.co/site/images/favicons/favicon-32x32.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

