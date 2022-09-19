import Link from 'next/link';
import React from 'react';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div>
      Страница не найдена <Link href="/">На главную</Link>
    </div>
  );
};

export default NotFound;
