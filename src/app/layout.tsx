import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { SiteFooter, SiteHeader } from "@/components/SiteChrome"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Giammarco — Full Stack Growth Marketer",
    template: "%s · Giammarco",
  },
  description:
    "Portfolio of ecommerce, WooCommerce plugins, WMS systems, tracking, and marketing automation by Giammarco at Sharp Metrics.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col font-sans">
        <div className="grain-overlay" aria-hidden="true" />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
