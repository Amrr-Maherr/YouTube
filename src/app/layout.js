import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/Providers/Providers";
import { ThemeProvider} from "next-themes";
import Navbar from "@/components/organisms/Navbar/Navbar";
import GoogleProvider from "@/Providers/GoogleProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "YouTube",
  description:
    "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GoogleProvider>
            <Providers>
              <Navbar />
              {children}
            </Providers>
          </GoogleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
