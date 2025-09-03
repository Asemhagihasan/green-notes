import { Tajawal, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "ملاحظات خضراء",
  description:
    "جرّب ملاحظات خضراء، التطبيق الذي يتيح لك كتابة ملاحظاتك بسرعة وتتبعها بسهولة عبر كود خاص بكل ملاحظة. واجهة واضحة وبسيطة تدعم اللغة العربية.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${tajawal.variable} ${inter.variable} antialiased flex flex-col min-h-screen bg-primary/5`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
