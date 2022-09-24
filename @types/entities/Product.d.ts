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
};

export type ProductVariant = {
  title: string;
  list: { title: string; price: number }[];
};
