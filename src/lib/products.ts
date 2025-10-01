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
    name: { en: 'High-Waist Trousers', ar: 'بنطلون بخصر عالي' },
    category: 'women',
    price: 530,
    imageId: 'women-3',
    image: PlaceHolderImages.find(p => p.id === 'women-3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'women-3')?.imageHint || ''
  },
  {
    id: 'prod-kids-1',
    name: { en: 'Dino Graphic Tee', ar: 'تيشيرت برسوم ديناصور' },
    category: 'kids',
    price: 199,
    imageId: 'kids-1',
    image: PlaceHolderImages.find(p => p.id === 'kids-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'kids-1')?.imageHint || ''
  },
  {
    id: 'prod-kids-2',
    name: { en: 'Playground-Ready Shorts', ar: 'شورت جاهز للعب' },
    category: 'kids',
    price: 250,
    imageId: 'kids-2',
    image: PlaceHolderImages.find(p => p.id === 'kids-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'kids-2')?.imageHint || ''
  },
  {
    id: 'prod-shoes-1',
    name: { en: 'Velocity Runners', ar: 'حذاء الجري فيلوسيتي' },
    category: 'shoes',
    price: 899,
    imageId: 'shoes-1',
    image: PlaceHolderImages.find(p => p.id === 'shoes-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'shoes-1')?.imageHint || ''
  },
  {
    id: 'prod-shoes-2',
    name: { en: 'Classic Leather Loafers', ar: 'حذاء لوفر جلدي كلاسيكي' },
    category: 'shoes',
    price: 750,
    imageId: 'shoes-2',
    image: PlaceHolderImages.find(p => p.id === 'shoes-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'shoes-2')?.imageHint || ''
  },
  {
    id: 'prod-accessories-1',
    name: { en: 'Chronograph Watch', ar: 'ساعة كرونوغراف' },
    category: 'accessories',
    price: 1200,
    imageId: 'accessories-1',
    image: PlaceHolderImages.find(p => p.id === 'accessories-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'accessories-1')?.imageHint || ''
  },
  {
    id: 'prod-accessories-2',
    name: { en: 'Aviator Sunglasses', ar: 'نظارات شمسية أفياتور' },
    category: 'accessories',
    price: 450,
    imageId: 'accessories-2',
    image: PlaceHolderImages.find(p => p.id === 'accessories-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'accessories-2')?.imageHint || ''
  },
];

export const categories: { id: ProductCategory, name: { en: string; ar: string }, imageId: string }[] = [
    { id: 'men', name: { en: 'Men', ar: 'رجالي' }, imageId: 'category-men' },
    { id: 'women', name: { en: 'Women', ar: 'نسائي' }, imageId: 'category-women' },
    { id: 'kids', name: { en: 'Kids', ar: 'أطفال' }, imageId: 'category-kids' },
    { id: 'shoes', name: { en: 'Shoes', ar: 'أحذية' }, imageId: 'category-shoes' },
    { id: 'accessories', name: { en: 'Accessories', ar: 'إكسسوارات' }, imageId: 'category-accessories' },
];
