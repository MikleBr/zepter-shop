import Link from 'next/link';
import React from 'react';
import { Product } from '../../../@types/entities/Product';
import { formatNumber } from '../../../helpers/formatNumber';
import { ActionsButton } from '../ActionsButton/ActionsButton';

import s from './Product.module.scss';

type Props = {
  product: Product;
  count: number;
  onAdd?: () => void;
  onRemove?: () => void;
  onDelete?: () => void;
};

export const BasketProduct = ({
  product,
  count,
  onAdd,
  onRemove,
  onDelete,
}: Props) => {
  return (
    <div className={s.product}>
      <div className={s.image}></div>
      <div className={s.info}>
        <div className={s.top}>
          <div className={s.productInfo}>
            <Link href={`/products/${product.id}`}>
              <div className={s.title}>{product.title}</div>
            </Link>
            <div className={s.subtitle}>
              {formatNumber(product.price)} &#8381;/шт
            </div>
          </div>
          <button className={s.deleteCross} onClick={onDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>

        <div className={s.bottom}>
          <div className={s.summary}>
            {formatNumber(product.price * count)} &#8381;
          </div>
          <ActionsButton count={count} onAdd={onAdd} onRemove={onRemove} />
        </div>
      </div>
    </div>
  );
};
