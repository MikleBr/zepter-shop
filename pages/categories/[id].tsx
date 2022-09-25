import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Product } from '../../@types/entities/Product';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ProductCard } from '../../components/Products/Card/Card';
import { categories } from '../../constants/categories';
import { products } from '../../constants/products';
import { BasketContext } from '../../context/BasketContext';
import { ShopLayout } from '../../layout/Shop/Shop';

import s from './Categories.module.scss';

const CategoryPage = () => {
  const router = useRouter();

  const {
    products: basketProducts,
    addProduct,
    removeProduct,
  } = useContext(BasketContext);

  const getProductCount = (product: Product) => {
    const foundedProduct = basketProducts.find(
      basketProduct => basketProduct.product.id === product.id
    );

    if (!foundedProduct) return 0;
    return foundedProduct.count;
  };

  const { id } = router.query;
  const categoryId = id ? +id : 0;

  const category = categories.find(category => category.id === categoryId);

  const filteredProducts = products.filter(
    product => product.categoryId === categoryId
  );

  return (
    <>
      <PageTitle
        title={category?.descriptionTitle || ''}
        image={category?.image || ''}
        description={category?.descriptionText}
        button={{ title: 'Перейти', onClick: () => console.log('test') }}
      />
      <ShopLayout>
        <div className={s.catalog}>
          {filteredProducts.map(product => (
            <div key={product.id} className={s.cardWrapper}>
              <ProductCard
                img={product.images?.[0] || ''}
                title={product.title}
                price={product.price}
                countInBasket={getProductCount(product)}
                onMoveToProduct={() => {
                  router.push(`/products/${product.id}`);
                }}
                onAddToBasket={() => {
                  addProduct(product);
                }}
                onRemoveFromBasket={() => {
                  removeProduct(product);
                }}
              />
            </div>
          ))}
        </div>
      </ShopLayout>
    </>
  );
};

export default CategoryPage;
