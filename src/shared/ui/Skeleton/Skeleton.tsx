import clsx from 'clsx';

import s from './Skeleton.module.scss';

type SkeletonProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  style?: React.CSSProperties;
};

const Skeleton = ({ className, width, height, borderRadius, style }: SkeletonProps) => {
  const skeletonClass = clsx(s.skeleton, className);

  return <div className={skeletonClass} style={{ width, height, borderRadius, ...style }} />;
};

export default Skeleton;
