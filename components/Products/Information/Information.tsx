import React from 'react';
import { SingleValue } from 'react-select';

import { Product } from '../../../@types/entities/Product';
import { formatNumber } from '../../../helpers/formatNumber';
import { getCategoryById } from '../../../helpers/getCategoryById';
import { ProductButtons } from '../../UI/ProductButtons/ProductButtons';
import { SelectCustom, SelectOption } from '../../UI/Select/Select';

import s from './Information.module.scss';

type Props = {
  product: Product;
  isFavorite?: boolean;
  countInBasket: number;
  price: number;
  selectValue?: SelectOption | null;
  onChangeSelect?: (value: SingleValue<SelectOption>) => void;
  onAddToFavorite?: () => void;
  onAddToBasket?: () => void;
  onRemoveFromBasket?: () => void;
  onMoveToCategory?: () => void;
};

export const Information = ({
  product,
  price,
  isFavorite,
  countInBasket,
  selectValue,
  onAddToFavorite,
  onAddToBasket,
  onRemoveFromBasket,
  onMoveToCategory,
  onChangeSelect,
}: Props) => {
  const selectOptions = product.variant?.list.map(el => ({
    value: el.price.toString(),
    label: el.title,
  }));

  const category = getCategoryById(product.categoryId);

  return (
    <div className={s.information}>
      <h1 className={s.title}>{product.title}</h1>
      <h2 className={s.price}>{formatNumber(price)} &#8381;</h2>
      <div className={s.divider}></div>
      {selectValue && (
        <SelectCustom
          defaultValue={selectValue}
          onChange={onChangeSelect}
          options={selectOptions}
        />
      )}
      <div className={s.buttons}>
        <ProductButtons
          countInBasket={countInBasket || 0}
          onAddToBasket={onAddToBasket}
          onRemoveFromBasket={onRemoveFromBasket}
          secondAction={{ title: 'Подробнее', onClick: onAddToFavorite }}
        />
      </div>
      {category && (
        <div className={s.categoryBlock}>
          Посмотреть все товары
          <br />
          <span className={s.categoryTitle} onClick={onMoveToCategory}>
            {category.title}
          </span>
        </div>
      )}
    </div>
  );
};
