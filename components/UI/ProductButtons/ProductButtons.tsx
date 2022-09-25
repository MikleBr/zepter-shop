import React from 'react';

import s from './ProductButtons.module.scss';

type Props = {
  countInBasket: number;
  secondAction?: {
    title: string;
    onClick?: () => void;
  };
  onAddToBasket?: () => void;
  onRemoveFromBasket?: () => void;
};

export const ProductButtons = ({
  countInBasket,
  secondAction,
  onAddToBasket,
  onRemoveFromBasket,
}: Props) => {
  const isProductInBasket = countInBasket !== 0;

  return (
    <div className={s.buttons}>
      {secondAction && (
        <button className={`${s.button}`} onClick={secondAction.onClick}>
          {secondAction.title}
        </button>
      )}

      <div
        className={`${s.button} ${s.cartButton} ${
          isProductInBasket ? s.active : ''
        }`}
        onClick={!isProductInBasket ? onAddToBasket : undefined}
      >
        {isProductInBasket && (
          <div
            className={`${s.button} ${s.actionButton}`}
            onClick={onRemoveFromBasket}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </div>
        )}

        {isProductInBasket && countInBasket}
        {!isProductInBasket ? (
          'Добавить в корзину'
        ) : (
          <div
            className={`${s.button} ${s.actionButton}`}
            onClick={onAddToBasket}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
