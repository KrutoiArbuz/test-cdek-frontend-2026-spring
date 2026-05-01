import clsx from 'clsx';
import { Fragment } from 'react';

import Divider from '@/shared/ui/Divider';

import type { NewsDto } from '../../types/newsType';
import NewsCard from '../NewsCard';

import s from './NewsList.module.scss';
type NewsListProps = {
  className?: string;
  newsList: NewsDto[];
  variant: 'news' | 'business';
};

const NewsList = ({ className, newsList, variant }: NewsListProps) => {
  const isBusiness = variant === 'business';

  const NewsListClass = clsx(s.newsList, isBusiness && s.newsList_business, className);

  return (
    <div className={NewsListClass}>
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
