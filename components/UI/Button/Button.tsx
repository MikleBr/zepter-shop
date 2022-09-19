import React, { ReactNode } from 'react';

import s from './Button.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const Button = ({ children, className, onClick, ...props }: Props) => {
  return (
    <button className={`${s.button} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
