import clsx from 'clsx';

import Skeleton from '@/shared/ui/Skeleton';

import s from './NewsCard.module.scss';

type NewsCardSkeletonProps = {
  variant: 'news' | 'business';
  hideCover?: boolean;
};

const NewsCardSkeleton = ({ variant, hideCover }: NewsCardSkeletonProps) => {
  const isBusiness = variant === 'business';

  if (isBusiness) {
    return (
      <div className={clsx(s.newsCard, s.newsCard_business)}>
        {!hideCover && <Skeleton className={s.newsCard__image} borderRadius={8} />}
        <div className={s.newsCard__content}>
          <div className={s.newsCard__header} style={{ gap: 7 }}>
            <Skeleton width="90%" height={21} borderRadius={4} />
          </div>
          <div className={s.newsCard__meta}>
            <Skeleton width={160} height={14} borderRadius={4} />
            <Skeleton width={100} height={14} borderRadius={4} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.newsCard}>
      <Skeleton className={s.newsCard__image} borderRadius={8} />
      <div className={s.newsCard__content}>
        <div className={s.newsCard__header} style={{ gap: 7 }}>
          <Skeleton width={80} height={14} borderRadius={4} />
          <Skeleton width="100%" height={18} borderRadius={4} />
          <Skeleton width="70%" height={18} borderRadius={4} />
        </div>
        <div className={s.newsCard__meta}>
          <div className={s.newsCard__metaBadges}>
            <Skeleton width={70} height={24} borderRadius={6} />
            <Skeleton width={55} height={24} borderRadius={6} />
          </div>
          <div className={s.newsCard__stats}>
            <Skeleton width={38} height={24} borderRadius={6} />
            <Skeleton width={42} height={24} borderRadius={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
