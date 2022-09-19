import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import s from './Header.module.scss';

type Link = {
  title: string;
  path: string;
};

type Props = {
  links: Link[];
};

export const Header = ({ links }: Props) => {
  const [isTransparent, setIsTransparent] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      <div className={s.links}>
        {links.map(link => (
          <Link href={link.path}>
            <a className={s.link}>{link.title}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};
