import React, { ReactNode } from 'react';

import s from './BlockWrapper.module.scss';

type Props = {
  children: ReactNode;
};

export const BlockWrapper = ({ children }: Props) => {
  return <div className={s.blockWrapper}>{children}</div>;
};
