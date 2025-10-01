/*
 * File: src/app/products/[category]/page.tsx
 */
import { products, categories, type ProductCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

type ProductsPageProps = {
  params: {
    category: ProductCategory;
  };
};

// This function generates the static paths for each category at build time.
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

const ProductsPage = ({ params }: ProductsPageProps) => {
  const { category } = params;
  const filteredProducts = products.filter((p) => p.category === category);
  const categoryInfo = categories.find(c => c.id === category);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline capitalize">
          {/* We use a client component to translate this */}
          <CategoryTitle categoryId={category} />
        </h1>
      </div>
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground py-16">
          <p className="text-xl">No products found in this category yet.</p>
        </div>
      )}
    </div>
  );
};


// A small client component to handle translation for the title
const CategoryTitle = ({ categoryId }: { categoryId: ProductCategory }) => {
  "use client";
  const { language } = require("@/hooks/useLanguage");
  const categoryInfo = require("@/lib/products").categories.find((c: any) => c.id === categoryId);
  return <>{categoryInfo ? categoryInfo.name[language] : categoryId}</>;
}


export default ProductsPage;// Placeholder for page.tsx
