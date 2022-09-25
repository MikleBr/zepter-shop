import React from 'react';
import { Category } from '../../../@types/entities/Category';
import { ProductButtons } from '../../UI/ProductButtons/ProductButtons';

import s from './Card.module.scss';

type Props = {
  img: string;
  category?: Category;
  title: string;
  price: number;
  countInBasket?: number;
  onMoveToProduct: () => void;
  onAddToBasket: () => void;
  onRemoveFromBasket: () => void;
};

export const ProductCard = ({
  img,
  category,
  title,
  price,
  countInBasket,
  onAddToBasket,
  onMoveToProduct,
  onRemoveFromBasket,
}: Props) => {
  return (
    <div className={s.card}>
      <div className={s.img} onClick={onMoveToProduct}>
        <img src={img} />
      </div>
      <p className={s.subtitle}>{category && category.title}</p>
      <p className={s.title}>{title}</p>
      <p className={s.price}>{price} &#8381;</p>
      <ProductButtons
        countInBasket={countInBasket || 0}
        onAddToBasket={onAddToBasket}
        onRemoveFromBasket={onRemoveFromBasket}
        secondAction={{ title: 'Подробнее', onClick: onMoveToProduct }}
      />
    </div>
  );
};
