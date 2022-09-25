import type { NextPage } from 'next';

import { BlockWrapper } from '../components/BlockWrapper/BlockWrapper';
import { CategoryList } from '../components/Category/List/CategoryList';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { ProductCard } from '../components/Products/Card/Card';

import { categories } from '../constants/categories';
import { products } from '../constants/products';
import { getCategoryById } from '../helpers/getCategoryById';
import { ShopLayout } from '../layout/Shop/Shop';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { BasketContext } from '../context/BasketContext';
import { Product } from '../@types/entities/Product';

import s from './index.module.scss';

const Home: NextPage = () => {
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

  return (
    <>
      <PageTitle
        title="Zepter"
        image="/images/background.png"
        description="ПЕРЕДОВЫЕ ТЕХНОЛОГИИ И ВЕЛИКОЛЕПНЫЙ ДИЗАЙН"
      />
      <ShopLayout scrollAnimation={true}>
        <CategoryList
          title="Коллекции на каждую неделю"
          categories={categories}
        />
        <BlockWrapper title="Рекомендуемые товары">
          <div className={s.catalog}>
            {products.map(product => (
              <div key={product.id} className={s.cardWrapper}>
                <ProductCard
                  img={product.images?.[0] || ''}
                  countInBasket={getProductCount(product)}
                  category={getCategoryById(product.categoryId)}
                  title={product.title}
                  price={product.price}
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
        </BlockWrapper>
      </ShopLayout>
    </>
  );
};

export default Home;
