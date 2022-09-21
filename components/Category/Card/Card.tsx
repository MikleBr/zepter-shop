import Link from 'next/link';
import React from 'react';

import s from './Card.module.scss';

type Props = {
  title: string;
  path: string;
  description?: string;
  image: string;
};

export const CategoryCard = ({ title, path, description, image }: Props) => {
  return (
    <Link href={path}>
      <div className={s.card} style={{ backgroundImage: `url(${image})` }}>
        <div className={s.bgFilter}></div>
        <div className={s.info}>
          <p className={s.title}>{title}</p>
          {/* {description && <p className={s.description}>{description}</p>} */}
        </div>
      </div>
    </Link>
  );
};
