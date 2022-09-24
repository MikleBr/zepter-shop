import React, { ReactNode } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import type { Breadcrumb } from '../../components/UI/Breadcrumbs/Breadcrumbs';

import { Breadcrumbs } from '../../components/UI/Breadcrumbs/Breadcrumbs';
import s from './Shop.module.scss';

type Props = {
  children: ReactNode;
  breadcrumbs?: Breadcrumb[];
};

const links = [
  {
    title: 'Главная',
    path: '/',
  },
  {
    title: 'Дом',
    path: '/groups/home',
  },
  {
    title: 'Кухня',
    path: '/groups/kitchen',
  },
];

export const ShopLayout = ({ children, breadcrumbs }: Props) => {
  return (
    <div className={s.page}>
      {/* <Header links={links} /> */}
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      <div className={s.container}>{children}</div>
      <Footer />
    </div>
  );
};
