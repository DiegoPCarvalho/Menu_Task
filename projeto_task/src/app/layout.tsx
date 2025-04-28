import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taskdesk",
  description: "Gerenciamento de Atividades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br"
      data-lt-installed={true}
      suppressHydrationWarning={true}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
