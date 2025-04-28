import { Open_Sans, Cormorant_Garamond } from "next/font/google";

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const comrmorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond", 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});