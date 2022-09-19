import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { categories } from '../../constants/categories';
import { products } from '../../constants/products';
import { ShopLayout } from '../../layout/Shop/Shop';

import s from './Categories.module.scss';

const CategoryPage = () => {
  const router = useRouter();

  const { id } = router.query;
  const categoryId = id ? +id : 0;

  const category = categories.find(category => category.id === categoryId);

  const filteredProducts = products.filter(
    product => product.categoryId === categoryId
  );

  return (
    <ShopLayout>
      <div>
        <div
          className={s.description}
          style={{ backgroundImage: `url(${category?.image})` }}
        >
          <div className={s.title}>{category?.descriptionTitle}</div>
          <div className={s.text}>{category?.descriptionText}</div>
          <div className={s.filter}></div>
        </div>
        <div>
          {filteredProducts.map(product => (
            <div>
              <div style={{ width: '100%' }}>
                <img src={product.images?.[0] || ''} />
                <div>
                  <div>{product.title}</div>
                  <div>{product.smallDescription}</div>
                  <Link href={`products/${product.id}`}>Перейти</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ShopLayout>
  );
};

export default CategoryPage;
