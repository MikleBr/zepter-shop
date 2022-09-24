import React, { useState } from 'react';

import s from './ImagesSlider.module.scss';

type Props = {
  images: string[];
};

export const ImagesSlider = ({ images }: Props) => {
  const [openedImage, setOpenedImage] = useState(images[0]);
  return (
    <div className={s.slider}>
      <div className={s.openedImage}>
        <img src={openedImage} />
      </div>
      <div className={s.imagesList}>
        {images.map(image => (
          <div
            key={image}
            className={s.image}
            onClick={() => setOpenedImage(image)}
          >
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};
