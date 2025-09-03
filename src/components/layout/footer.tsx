import { Info, Phone, Shield } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerLinks = [
    { name: "من نحن", href: "/about", icon: Info },
    { name: "الخصوصية", href: "/privacy", icon: Shield },
    { name: "الشروط", href: "/terms", icon: Shield },
    { name: "اتصل بنا", href: "/contact", icon: Phone },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon className="w-4 h-4" />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 الملاحظات الشخصية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
