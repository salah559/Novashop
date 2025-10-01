/*
 * File: src/components/Header.tsx
 */
"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("navHome") },
    { href: "/products/men", label: t("navProducts") },
    { href: "/about", label: t("navAbout") },
    { href: "/contact", label: t("navContact") },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-card/80 backdrop-blur-lg sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <ShoppingBag className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold font-headline text-foreground">
            {t("appName")}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hidden md:inline-flex"
          >
            {t("toggleLanguage")}
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label={t('navCart')}>
              <div className="relative">
                <ShoppingBag className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {itemCount}
                  </span>
                )}
              </div>
            </Button>
          </Link>
          
          <div className="md:hidden">
             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'ar' ? 'right' : 'left'}>
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                         <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
                            <ShoppingBag className="h-7 w-7 text-primary" />
                            <span className="text-2xl font-bold font-headline text-foreground">
                                {t("appName")}
                            </span>
                        </Link>
                        <SheetClose asChild>
                             <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                            </Button>
                        </SheetClose>
                    </div>

                  <nav className="flex flex-col gap-6 text-xl">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-foreground/80 transition-colors hover:text-primary"
                          onClick={handleLinkClick}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto">
                     <Button
                        variant="outline"
                        size="lg"
                        onClick={() => {
                            toggleLanguage();
                            handleLinkClick();
                        }}
                        className="w-full"
                    >
                        {t("toggleLanguage")}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;// Placeholder for Header.tsx
