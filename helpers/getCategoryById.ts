import { categories } from '../constants/categories';

export function getCategoryById(categoryId: number) {
  return categories.find(category => category.id === categoryId);
}
