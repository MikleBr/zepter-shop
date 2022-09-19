import Link from 'next/link';
import React from 'react';

import s from './Footer.module.scss';

type Props = {};

const topLinks = [
  {
    title: '8 (921) 888-88-88',
    description: 'ежедневно с 10:00 до 20:00',
  },
  {
    title: '8 (921) 888-88-88',
    description: 'Whats`App, Telegram',
  },
  {
    title: 'test@test.ru',
    description: 'Пишите по любым вопросам',
  },
  {
    title: '@test',
    description: 'Instagram',
  },
];

const bottomLinks = [
  {
    title: 'О нас',
    path: '',
  },
  {
    title: 'Оплата и доставка',
    path: '',
  },
  {
    title: 'Для покупателей',
    path: '',
  },
];

export const Footer = ({}: Props) => {
  return (
    <div className={s.footer}>
      <div className={s.top}>
        <div className={s.container}>
          {topLinks.map(link => (
            <div className={s.link}>
              <div className={s.title}>{link.title}</div>
              <div className={s.description}>{link.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.container}>
          <div className={s.row}></div>
          <div className={s.row}>
            {bottomLinks.map(link => (
              <Link href={link.path}>
                <a className={s.link}>{link.title}</a>
              </Link>
            ))}
          </div>
          <div className={s.row}>
            {bottomLinks.map(link => (
              <Link href={link.path}>
                <a className={s.link}>{link.title}</a>
              </Link>
            ))}
          </div>
          <div className={s.row}></div>
        </div>
      </div>
    </div>
  );
};
