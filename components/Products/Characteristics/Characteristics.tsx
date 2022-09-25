import React from 'react';
import { ProductCharacteristics as IProductCharacteristics } from '../../../@types/entities/Product';

import s from './Characteristics.module.scss';

type Props = {
  characteristics: IProductCharacteristics[];
};

export const ProductCharacteristics = ({ characteristics }: Props) => {
  return (
    <ul className={s.characteristics}>
      {characteristics.map(characteristic => (
        <li key={characteristic.title} className={s.characteristic}>
          <div className={s.field}>{characteristic.title}</div>
          <div className={s.divider}></div>
          <div className={s.value}>{characteristic.value}</div>
        </li>
      ))}
    </ul>
  );
};
