import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aman Sharma — Agentic AI Engineer",
  description:
    "Agentic AI engineer building multi-agent systems — LangGraph, Google ADK, MCP — deployed on AWS and GCP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
