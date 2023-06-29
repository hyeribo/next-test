import { Noto_Sans, Noto_Sans_KR } from "next/font/google";

export const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans",
});

export const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const fontClassNames = [
  noto_sans_kr.className,
  noto_sans.className,
].join(" ");
