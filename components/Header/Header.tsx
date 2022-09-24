import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../UI/Button/Button';
import { CartButton } from '../UI/CartButton/CartButton';

import CartIcon from './../../assets/icons/cart.svg';

import s from './Header.module.scss';

type Link = {
  title: string;
  path: string;
};

type Props = {
  scrollAnimation?: boolean;
  links: Link[];
};

export const Header = ({ scrollAnimation, links }: Props) => {
  const [isTransparent, setIsTransparent] = useState(scrollAnimation);
  const headerRef = useRef<HTMLDivElement>(null);

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
          <div className={s.logo}>Zepter</div>
        </div>
        <div className={s.links}>
          {links.map(link => (
            <Link key={link.path} href={link.path}>
              <a className={s.link}>{link.title}</a>
            </Link>
          ))}
        </div>
        <div className={s.left}>
          <CartButton color={isTransparent ? '#fff' : '#292527'} />
        </div>
      </div>
    </div>
  );
};
