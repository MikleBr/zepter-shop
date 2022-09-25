import React from 'react';

import s from './ActionsButton.module.scss';

type Props = {
  count?: number;
  onAdd?: () => void;
  onRemove?: () => void;
};

export const ActionsButton = ({ count, onAdd, onRemove }: Props) => {
  return (
    <div className={s.actionsButtons}>
      <button className={s.button} onClick={onRemove}>
        -
      </button>
      <div className={s.counter}>{count}</div>
      <button className={s.button} onClick={onAdd}>
        +
      </button>
    </div>
  );
};
