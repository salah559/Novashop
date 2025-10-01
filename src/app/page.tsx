/*
 * File: src/app/about/page.tsx
 */
"use client";

import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const AboutPage = () => {
  const { t } = useLanguage();
  const aboutImage = PlaceHolderImages.find(p => p.id === 'category-women');

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-center mb-12">
          {t("aboutTitle")}
        </h1>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="prose prose-lg max-w-none text-foreground/80">
            <p>
              {t("aboutText")}
            </p>
          </div>
           <div className="relative aspect-square md:aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
             {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                />
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
