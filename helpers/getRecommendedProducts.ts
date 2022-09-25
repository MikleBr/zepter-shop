import { Product } from '../@types/entities/Product';
import { products } from '../constants/products';

export function getRecommendedProducts(product: Product): Product[] {
  if (!product.recommendedProductIds) return [];

  return product.recommendedProductIds.reduce<Product[]>((acc, currentId) => {
    const addedProduct = products.find(
      constantProduct => currentId === constantProduct.id
    );

    if (!addedProduct) {
      return acc;
    }

    return [...acc, addedProduct];
  }, []);
}
