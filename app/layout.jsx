import { ThemeProvider } from "@/components/theme-provider";
import styles from "../page.module.css";

import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Nav from "@/components/global/nav";
import Footer from "@/components/global/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Shadcn Boilerplate",
  description:
    "Responsive Shadcn starter template with Next.js 14, App Router, Dark Mode, React Icons, Navbar and Footer, and all Shadcn components installed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={styles.container}>
            <div className={styles.menu}>
              <Nav />
            </div>
            <div className={styles.content}>
              {children}
              <Footer />
            </div>
          </div>

        </ThemeProvider>
      </body>
    </html >
  );
}
