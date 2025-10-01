"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { categories } from "@/lib/products";
import type { ProductCategory } from "@/lib/products";

const HomePage = () => {
  const { t, language } = useLanguage();
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-image");

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white overflow-hidden rounded-b-3xl">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 p-4 space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-shadow-lg">
            {t("heroTitle")}
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto text-shadow">
            {t("heroSubtitle")}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/products/women">{t("heroCta")}</Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          {t("categoriesTitle")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => {
            const categoryImage = PlaceHolderImages.find((p) => p.id === category.imageId);
            return (
              <Link href={`/products/${category.id}`} key={category.id}>
                <Card className="overflow-hidden group relative border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <CardContent className="p-0">
                    {categoryImage && (
                       <Image
                        src={categoryImage.imageUrl}
                        alt={category.name[language]}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full aspect-square group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={categoryImage.imageHint}
                      />
                    )}
                     <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white text-lg md:text-xl font-bold font-headline">
                        {category.name[language]}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;