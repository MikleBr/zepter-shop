import Link from 'next/link';
import React from 'react';

import s from './Breadcrumbs.module.scss';

export type Breadcrumb = {
  label: string;
  path?: string;
};

type Props = {
  breadcrumbs: Breadcrumb[];
};

export const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <div className={s.breadcrumbs}>
      <div className={s.container}>
        {breadcrumbs.map((link, i) => (
          <div key={`${i}_${link.path}`} className={s.breadcrumb}>
            {i !== 0 && <span className={s.divider}>/</span>}
            {link.path ? (
              <Link href={link.path}>
                <p className={s.link}>{link.label}</p>
              </Link>
            ) : (
              <p className={`${s.link} ${s.inactive}`}>{link.label}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
