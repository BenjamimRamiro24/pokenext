import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "HOPE — Hub for Operation, People and Equipment",
    template: "%s | HOPE",
  },
  description: "HOPE — Hub for Operation, People and Equipment",
  keywords: ["HOPE", "Operation", "People", "Equipment"],
  authors: [{ name: "HOPE" }],
  icons: {
    icon: "/image/add_icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
