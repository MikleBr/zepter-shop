import React from 'react';
import { Category } from '../../../@types/entities/Category';

import s from './Card.module.scss';

type Props = {
  img: string;
  category?: Category;
  title: string;
  price: number;
  onMoveToProduct: () => void;
  onAddToBasket: () => void;
};

export const ProductCard = ({
  img,
  category,
  title,
  price,
  onAddToBasket,
  onMoveToProduct,
}: Props) => {
  return (
    <div className={s.card}>
      <div className={s.img} onClick={onMoveToProduct}>
        <img src={img} />
      </div>
      <p className={s.subtitle}>{category && category.title}</p>
      <p className={s.title}>{title}</p>
      <p className={s.price}>{price} &#8381;</p>
      <div className={s.buttons}>
        <button className={`${s.button}`} onClick={onMoveToProduct}>
          Подробнее
        </button>
        <button
          className={`${s.button} ${s.addToBasket}`}
          onClick={onAddToBasket}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};
