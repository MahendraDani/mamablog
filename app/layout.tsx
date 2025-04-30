import { comrmorantGaramond, openSans } from "@/lib/font";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Mamablog | Rich articles",
  description: "A blogging platform developed as tribute to all mothers on occasion Mother's Day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased bg-background text-foreground",comrmorantGaramond.className
        )}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
