import React, { useContext, useEffect } from 'react';
import { BasketContext } from '../../../context/BasketContext';
import { Button } from '../../UI/Button/Button';
import { BasketProduct } from '../Product/Product';

import s from './Sidebar.module.scss';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
};

export const BasketSidebar = ({ isOpen, onClose }: Props) => {
  const {
    products: basketProducts,
    addProduct,
    removeProduct,
    deleteProduct,
  } = useContext(BasketContext);

  const isBasketEmpty = basketProducts.length === 0;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`${s.background} ${!isOpen && s.hidden}`}
        onClick={onClose}
      ></div>
      <div className={`${s.basketModal} ${!isOpen && s.hidden}`}>
        <div className={s.content}>
          <div className={s.title}>Корзина</div>
          {isBasketEmpty && <p className={s.empty}>Ваша корзина пуста</p>}
          {basketProducts.map(basketField => (
            <BasketProduct
              key={basketField.product.id}
              product={basketField.product}
              count={basketField.count}
              onAdd={() => addProduct(basketField.product)}
              onRemove={() => removeProduct(basketField.product)}
              onDelete={() => deleteProduct(basketField.product)}
            />
          ))}
          {!isBasketEmpty && (
            <Button className={s.button}>Оформить заявку</Button>
          )}
        </div>
      </div>
    </>
  );
};
