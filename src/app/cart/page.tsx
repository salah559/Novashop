/*
 * File: src/app/cart/page.tsx
 */
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from "@/hooks/useCart";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import OrderForm from '@/components/OrderForm';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, itemCount } = useCart();
  const { t, language } = useLanguage();

  if (itemCount === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-4 text-3xl font-bold font-headline">{t("cartTitle")}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{t("cartEmpty")}</p>
        <Button asChild className="mt-6">
          <Link href="/">{t("heroCta")}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-headline text-center mb-8">{t("cartTitle")}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="flex items-center p-4 overflow-hidden">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name[language]}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow md:flex md:items-center md:justify-between ms-4">
                <div className="mb-2 md:mb-0">
                  <h2 className="font-bold text-lg">{item.name[language]}</h2>
                  <p className="text-muted-foreground text-md">{item.price} DZD</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                      className="h-8 w-14 text-center"
                    />
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" className="ms-4 text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{t('orderFormTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2 text-lg mb-6">
                    <div className="flex justify-between">
                        <span>{t('cartSubtotal')} ({itemCount} {t('cartItem')}):</span>
                        <span className="font-semibold">{totalPrice} DZD</span>
                    </div>
                     <div className="flex justify-between font-bold text-xl">
                        <span>{t('cartTotal')}:</span>
                        <span>{totalPrice} DZD</span>
                    </div>
                </div>
               <OrderForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;// Placeholder for page.tsx
