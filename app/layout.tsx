import type { Metadata } from "next";
import "./globals.css";
import { ThemeProviderWrapper } from "./providers/ThemeProviderWrapper";
import SplashCursor from "./components/ui/SplashCursor";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mehedi | Portfolio",
  description: "Personal portfolio of Mehedi Hasan Hridoy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>

     <body className={`${poppins.variable} font-poppins antialiased`}>

        <ThemeProviderWrapper>
          <SplashCursor />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
