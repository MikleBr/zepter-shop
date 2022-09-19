import React from 'react';
import { Category } from '../../../@types/entities/Category';
import { BlockWrapper } from '../../BlockWrapper/BlockWrapper';
import { CategoryCard } from '../Card/Card';

import s from './CategoryList.module.scss';

type Props = {
  title: string;
  categories: Category[];
};

export const CategoryList = ({ title, categories }: Props) => {
  return (
    <BlockWrapper>
      <div className={s.categoriesList}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.cardsList}>
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              title={category.title}
              path={`categories/${category.id}`}
              image={category.image || ''}
            />
          ))}
        </div>
      </div>
    </BlockWrapper>
  );
};
