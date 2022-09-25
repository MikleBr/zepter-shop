import React, { ReactNode, useState } from 'react';
import { BasketSidebar } from '../../components/Basket/Sidebar/Sidebar';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import type { Breadcrumb } from '../../components/UI/Breadcrumbs/Breadcrumbs';

import { Breadcrumbs } from '../../components/UI/Breadcrumbs/Breadcrumbs';
import s from './Shop.module.scss';

type Props = {
  children: ReactNode;
  scrollAnimation?: boolean;
  breadcrumbs?: Breadcrumb[];
};

const links = [
  {
    title: 'Главная',
    path: '/',
  },
  {
    title: 'Категории',
    path: '/categories',
  },
];

export const ShopLayout = ({
  children,
  scrollAnimation,
  breadcrumbs,
}: Props) => {
  const [isBasketOpened, setIsBasketOpened] = useState(false);

  const toggleBasketModal = () => {
    setIsBasketOpened(!isBasketOpened);
  };

  return (
    <div className={`${s.page} ${scrollAnimation ? s.scrollHeader : ''}`}>
      <Header
        scrollAnimation={scrollAnimation}
        onClickBasket={toggleBasketModal}
        links={links}
      />
      <BasketSidebar isOpen={isBasketOpened} onClose={toggleBasketModal} />
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      <div className={s.container}>{children}</div>
      <Footer />
    </div>
  );
};
