import React, { ReactNode } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import s from './Shop.module.scss';

type Props = {
  children: ReactNode;
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

export const ShopLayout = ({ children }: Props) => {
  return (
    <div className={s.page}>
      <Header links={links} />
      <div className={s.container}>{children}</div>
      <Footer />
    </div>
  );
};
