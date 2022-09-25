import { BaseEntity } from './BaseEntity';
import { Category } from './Category';

export type Product = BaseEntity & {
  title: string;
  smallDescription?: string;
  description: string;
  images?: string[];
  categoryId: number;
  price: number;
  variant?: ProductVariant;
  recommendedProductIds?: number[];
  characteristics?: ProductCharacteristics[];
};

export type ProductVariant = {
  title: string;
  list: { title: string; price: number }[];
};

export type ProductCharacteristics = {
  title: string;
  value: string;
};
