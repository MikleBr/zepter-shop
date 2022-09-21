import React, { ReactNode } from 'react';

import s from './BlockWrapper.module.scss';

type Props = {
  title?: string;
  children: ReactNode;
};

export const BlockWrapper = ({ title, children }: Props) => {
  return (
    <div className={s.blockWrapper}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </div>
  );
};
