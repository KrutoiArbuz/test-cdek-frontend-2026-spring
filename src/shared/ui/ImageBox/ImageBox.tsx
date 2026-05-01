import clsx from 'clsx';

import s from './ImageBox.module.scss';

type ImageBoxProps = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  srcSet?: string;
  sizes?: string;
};

const ImageBox = ({ src, alt = '', width, height, className, srcSet, sizes }: ImageBoxProps) => {
  const imageBoxClass = clsx(s.imageBox, className);

  return (
    <div className={imageBoxClass} style={{ width, height }}>
      <img src={src} alt={alt} className={s.image} loading="lazy" srcSet={srcSet} sizes={sizes} />
    </div>
  );
};

export default ImageBox;
