/*
 * File: src/components/Footer.tsx
 */
"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { ShoppingBag } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-headline text-foreground">{t("appName")}</span>
          </div>
          <nav className="flex gap-4 md:gap-6 text-muted-foreground">
            <Link href="/about" className="hover:text-primary transition-colors">{t("navAbout")}</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">{t("navContact")}</Link>
            <Link href="/products/men" className="hover:text-primary transition-colors">{t("navProducts")}</Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("appName")}. {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;// Placeholder for Footer.tsx
