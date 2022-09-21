import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { CategoryList } from '../components/Category/List/CategoryList';
import { PageTitle } from '../components/PageTitle/PageTitle';

import { categories } from '../constants/categories';
import { ShopLayout } from '../layout/Shop/Shop';

const Home: NextPage = () => {
  return (
    <>
      <PageTitle
        title="Революционная гостиница"
        image="/images/background.png"
        description="Спроектировано студией shelby loft"
        button={{ title: 'Перейти', onClick: () => console.log('test') }}
      />
      <ShopLayout>
        <CategoryList
          title="Коллекции на каждую неделю"
          categories={categories}
        />
      </ShopLayout>
    </>
  );
};

export default Home;
