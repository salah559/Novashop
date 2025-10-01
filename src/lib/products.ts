// Placeholder for /*
 * File: src/lib/products.ts
 */
import { PlaceHolderImages } from './placeholder-images';

export type ProductCategory = 'men' | 'women' | 'kids' | 'shoes' | 'accessories';

export type Product = {
  id: string;
  name: { en: string; ar: string };
  category: ProductCategory;
  price: number;
  imageId: string;
  image: string;
  imageHint: string;
};

export const products: Product[] = [
  {
    id: 'prod-men-1',
    name: { en: 'Urban Explorer T-Shirt', ar: 'تيشيرت المستكشف الحضري' },
    category: 'men',
    price: 299,
    imageId: 'men-1',
    image: PlaceHolderImages.find(p => p.id === 'men-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'men-1')?.imageHint || ''
  },
  {
    id: 'prod-men-2',
    name: { en: 'Executive Oxford Shirt', ar: 'قميص أكسفورد التنفيذي' },
    category: 'men',
    price: 450,
    imageId: 'men-2',
    image: PlaceHolderImages.find(p => p.id === 'men-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'men-2')?.imageHint || ''
  },
  {
    id: 'prod-men-3',
    name: { en: 'Classic Denim Jeans', ar: 'جينز دينم كلاسيكي' },
    category: 'men',
    price: 599,
    imageId: 'men-3',
    image: PlaceHolderImages.find(p => p.id === 'men-3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'men-3')?.imageHint || ''
  },
  {
    id: 'prod-women-1',
    name: { en: 'Floral Sundress', ar: 'فستان صيفي مورد' },
    category: 'women',
    price: 650,
    imageId: 'women-1',
    image: PlaceHolderImages.find(p => p.id === 'women-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'women-1')?.imageHint || ''
  },
  {
    id: 'prod-women-2',
    name: { en: 'Silk Chiffon Blouse', ar: 'بلوزة شيفون حريرية' },
    category: 'women',
    price: 420,
    imageId: 'women-2',
    image: PlaceHolderImages.find(p => p.id === 'women-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'women-2')?.imageHint || ''
  },
  {
    id: 'prod-women-3',
    name: { en: 'High-Waist Trousers', ar
