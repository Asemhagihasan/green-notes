"use client";
import Link from "next/link";
import Navigation from "./navigation";
import MobileSidebar from "./mobile-sidebar";
import { FileText, Home, Search, Settings } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "الرئيسية", href: "/", icon: Home },
    {
      name: "إرسال ملاحظة",
      href: "/submit-note",
      icon: FileText,
    },
    {
      name: "تتبع الملاحظة",
      href: "/track-note",
      icon: Search,
    },
    {
      name: "لوحة التحكم",
      href: "/admin",
      icon: Settings,
    },
  ];
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary">
              <FileText className="w-4 h-4 text-white" />
            </div>

            <h1 className="text-lg font-bold text-foreground">
              الملاحظات الشخصية
            </h1>
          </Link>

          <Navigation navItems={navItems} />

          <div className="md:hidden">
            <MobileSidebar navItems={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
