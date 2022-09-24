import React from 'react';

import s from './Characteristics.module.scss';

type Props = {};

export const ProductCharacteristics = (props: Props) => {
  return (
    <ul className={s.characteristics}>
      <li className={s.characteristic}>
        <div className={s.field}>Гарантия:</div>
        <div className={s.divider}></div>
        <div className={s.value}>1 год</div>
      </li>
      <li className={s.characteristic}>
        <div className={s.field}>Гарантия:</div>
        <div className={s.divider}></div>
        <div className={s.value}>1 год</div>
      </li>
      <li className={s.characteristic}>
        <div className={s.field}>Гарантия:</div>
        <div className={s.divider}></div>
        <div className={s.value}>1 год</div>
      </li>
    </ul>
  );
};
