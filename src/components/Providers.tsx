/*
 * File: src/components/Providers.tsx
 */
"use client";

import { CartProvider } from "@/contexts/CartContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <CartProvider>
        {children}
        <Toaster />
      </CartProvider>
    </LanguageProvider>
  );
}// Placeholder for Providers.tsx
