import React from 'react';
import { Button } from '../UI/Button/Button';
import s from './PageTitle.module.scss';
type Props = {
  title: string;
  description?: string;
  image: string;
  button?: {
    title: string;
    onClick: () => void;
  };
};
export const PageTitle = ({ title, description, image, button }: Props) => {
  return (
    <div className={s.pageTitle} style={{ backgroundImage: `url("${image}")` }}>
      <div className={s.container}>
        <h1 className={s.title}>{title}</h1>
        {description && <p className={s.description}>{description}</p>}
        {button && (
          <Button className={s.button} onClick={button.onClick}>
            {button.title}
          </Button>
        )}
      </div>
    </div>
  );
};
