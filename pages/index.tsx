import type { NextPage } from 'next';

import { BlockWrapper } from '../components/BlockWrapper/BlockWrapper';
import { CategoryList } from '../components/Category/List/CategoryList';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { ProductCard } from '../components/Products/Card/Card';

import { categories } from '../constants/categories';
import { products } from '../constants/products';
import { getCategoryById } from '../helpers/getCategoryById';
import { ShopLayout } from '../layout/Shop/Shop';

import s from './index.module.scss';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <PageTitle
        title="Zepter"
        image="/images/background.png"
        description="ПЕРЕДОВЫЕ ТЕХНОЛОГИИ И ВЕЛИКОЛЕПНЫЙ ДИЗАЙН"
        button={{ title: 'Перейти', onClick: () => console.log('test') }}
      />
      <ShopLayout>
        <CategoryList
          title="Коллекции на каждую неделю"
          categories={categories}
        />
        <BlockWrapper title="Рекомендуемые товары">
          <div className={s.grid}>
            {products.map(product => (
              <div className={s.element}>
                <ProductCard
                  img={product.images?.[0] || ''}
                  category={getCategoryById(product.categoryId)}
                  title={product.title}
                  price={product.price}
                  onMoveToProduct={() => {
                    router.push(`/products/${product.id}`);
                  }}
                  onAddToBasket={() => {
                    console.log('add to basket');
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
