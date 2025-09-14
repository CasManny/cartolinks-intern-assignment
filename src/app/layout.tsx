import type { Metadata } from "next";
import { ThemeProvider } from "@/components/navbar/theme-provider";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Krea AI",
    template: "Krea AI",
  },
  description:
    "Krea AI helps you generate, enhance, and transform images, videos, and 3D content with AI-powered tools.",
  keywords: [
    "AI tools",
    "Krea AI",
    "image generation",
    "video enhancement",
    "3D object generator",
    "AI upscaler",
  ],
  authors: [{ name: "Krea AI Team", url: "https://krea.ai" }],
  creator: "Krea AI",
  publisher: "Krea AI",
  metadataBase: new URL("https://krea-ai.vercel.app"),
  openGraph: {
    title: "Krea AI – AI-powered Creative Tools",
    description:
      "Generate, enhance, and transform content with Krea AI’s suite of creative AI tools.",
    url: "https://krea-ai.vercel.app",
    siteName: "Krea AI",
    images: [
      {
        url: "/complete-ui.png", // must exist in /public
        width: 1200,
        height: 630,
        alt: "Krea AI App UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kreas AI – AI-powered Creative Tools",
    description:
      "Generate, enhance, and transform content with Keras AI’s suite of creative AI tools.",
    images: ["/complete-ui.png"],
    creator: "@kresai",
  },
  alternates: {
    canonical: "https://krea-ai.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`$${roboto.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
