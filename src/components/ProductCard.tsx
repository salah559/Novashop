/*
 * File: src/components/ProductCard.tsx
 */
"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type Product } from "@/lib/products";
import { CheckCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Card className="w-full overflow-hidden group border-2 transition-shadow hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="overflow-hidden aspect-[4/5] relative">
          <Image
            src={product.image}
            alt={product.name[language]}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-ai-hint={product.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-headline text-lg leading-tight h-14">
          {product.name[language]}
        </CardTitle>
        <p className="text-xl font-semibold text-primary mt-2">
          {product.price} DZD
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full font-bold bg-accent hover:bg-accent/90 text-accent-foreground" 
          onClick={handleAddToCart}
          disabled={added}
        >
          {added ? (
            <>
              <CheckCircle className="h-5 w-5 me-2" />
              {t('addedToCart')}
            </>
          ) : (
            t('addToCart')
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;// Placeholder for ProductCard.tsx
