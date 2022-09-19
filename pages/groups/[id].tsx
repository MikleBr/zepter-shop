import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { categories } from '../../constants/categories';
import { ShopLayout } from '../../layout/Shop/Shop';

import s from './Groups.module.scss';

const ProductPage = () => {
  const router = useRouter();

  const { id } = router.query;
  const groupKey = id;

  const filteredCategories = categories.filter(
    category => category.group === groupKey
  );

  return (
    <ShopLayout>
      {filteredCategories.map(category => (
        <div>
          <div>
            <Link href={`/categories/${category.id}`}>{category.title}</Link>
          </div>
        </div>
      ))}
    </ShopLayout>
  );
};

export default ProductPage;
