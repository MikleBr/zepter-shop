import type { NextPage } from 'next';
import { CategoryList } from '../../components/Category/List/CategoryList';
import { categories } from '../../constants/categories';
import { ShopLayout } from '../../layout/Shop/Shop';

import s from './index.module.scss';

const CategoriesPage = () => {
  return (
    <ShopLayout>
      <CategoryList title="Категории товаровы" categories={categories} />
    </ShopLayout>
  );
};

export default CategoriesPage;
