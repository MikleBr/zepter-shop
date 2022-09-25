import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { BasketContext } from '../../context/BasketContext';
import { formatNumber } from '../../helpers/formatNumber';
import { CartButton } from '../UI/CartButton/CartButton';

import s from './Header.module.scss';

type Link = {
  title: string;
  path: string;
};

type Props = {
  scrollAnimation?: boolean;
  links: Link[];
  onClickBasket?: () => void;
};

export const Header = ({ scrollAnimation, links, onClickBasket }: Props) => {
  const [isTransparent, setIsTransparent] = useState(scrollAnimation);
  const headerRef = useRef<HTMLDivElement>(null);

  const { products: basketProducts } = useContext(BasketContext);

  const summaryPrice = basketProducts.reduce<number>((acc, product) => {
    return (acc += product.count * product.product.price);
  }, 0);

  const productsCount = basketProducts.reduce<number>((acc, product) => {
    return (acc += product.count);
  }, 0);

  useEffect(() => {
    if (!scrollAnimation) return;
    if (!headerRef || !headerRef.current) return;
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop < 100) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerRef]);

  return (
    <div
      ref={headerRef}
      className={`${s.header} ${isTransparent ? s.transparent : ''}`}
    >
      <div className={s.container}>
        <div className={s.right}>
          <Link href="/">
            <div className={s.logo}>Zepter</div>
          </Link>
        </div>
        <div className={s.links}>
          {links.map(link => (
            <Link key={link.path} href={link.path}>
              <a className={s.link}>{link.title}</a>
            </Link>
          ))}
        </div>
        <div className={s.left}>
          <div className={`${s.phoneLink} ${!isTransparent && s.dark}`}>
            <a href="tel:89999999999">8 (999) 999-99-99</a>
          </div>
          <div className={s.cart} onClick={onClickBasket}>
            <CartButton
              type={isTransparent ? 'light' : 'dark'}
              count={productsCount}
            />
            <span className={s.summary}>
              {formatNumber(summaryPrice)} &#8381;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
