import clsx from 'clsx';

import s from './ImageBox.module.scss';

type ImageBoxProps = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
};

const ImageBox = ({ src, alt = '', width, height, className }: ImageBoxProps) => {
  const imageBoxClass = clsx(s.imageBox, className);

  return (
    <div className={imageBoxClass} style={{ width, height }}>
      <img src={src} alt={alt} className={s.image} />
    </div>
  );
};

export default ImageBox;
