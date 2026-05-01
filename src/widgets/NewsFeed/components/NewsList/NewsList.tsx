import clsx from 'clsx';
import { Fragment } from 'react';

import Divider from '@/shared/ui/Divider';

import type { NewsDto } from '../../types/newsType';
import NewsCard, { NewsCardSkeleton } from '../NewsCard';

import s from './NewsList.module.scss';
type NewsListProps = {
  className?: string;
  newsList: NewsDto[];
  variant: 'news' | 'business';
  isLoading?: boolean;
  pageSize?: number;
};

const NewsList = ({ className, newsList, variant, isLoading, pageSize = 3 }: NewsListProps) => {
  const isBusiness = variant === 'business';
  const newsListClass = clsx(s.newsList, isBusiness && s.newsList_business, className);

  if (isLoading) {
    return (
      <div className={newsListClass}>
        {Array.from({ length: pageSize }, (_, i) => (
          <Fragment key={i}>
            <NewsCardSkeleton variant={variant} hideCover={isBusiness && i !== 0} />
            {i < pageSize - 1 && <Divider className={s.divider} />}
          </Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className={newsListClass}>
      {newsList.map((news, index) => (
        <Fragment key={news.id}>
          <NewsCard
            news={news}
            variant={variant}
            isTop={isBusiness && index === 0}
            hideCover={isBusiness && index !== 0}
            hideCoverOnMobile={index !== 0}
          />
          {index < newsList.length - 1 && <Divider className={s.divider} />}
        </Fragment>
      ))}
    </div>
  );
};

export default NewsList;
