import clsx from 'clsx';
import { useState } from 'react';

import Divider from '@/shared/ui/Divider';
import Pagination from '@/shared/ui/Pagination';
import Skeleton from '@/shared/ui/Skeleton';
import { formatMonthYear } from '@/shared/utils/formatDate';

import s from './NewsFeed.module.scss';
import NewsFeedHeader from './components/NewsFeedHeader';
import NewsList from './components/NewsList';
import { useNewsPagesQuery } from './hooks/useNewsQueries';
import type { NewsDto } from './types/newsType';
import EmptyState from './ui/EmptyState';
import ErrorState from './ui/ErrorState';

type NewsFeedProps = {
  variant: 'news' | 'business';
  className?: string;
};

const PAGE_SIZE = 3;

const NewsFeed = ({ variant, className }: NewsFeedProps) => {
  const [page, setPage] = useState(1);

  const NewsFeedClass = clsx(s.newsFeed, className);

  const { data, isLoading, isError } = useNewsPagesQuery({
    page,
    perPage: PAGE_SIZE,
  });

  let newsList: NewsDto[] = [];
  let totalPages = 0;
  let datePublication = '';
  if (data) {
    newsList = data.news;
    totalPages = data.totalPages;
    datePublication = data.minDatePublication;
  }

  return (
    <div className={NewsFeedClass}>
      <div className={s.header}>
        <NewsFeedHeader
          titleText={variant === 'news' ? 'Новости компании' : 'Бизнес'}
          secondaryText={
            datePublication ? (
              formatMonthYear(datePublication)
            ) : (
              <Skeleton width={100} height={14} borderRadius={4} />
            )
          }
        />
        <Divider />
      </div>

      <div className={s.content}>
        {isError ? (
          <ErrorState />
        ) : isLoading || newsList.length > 0 ? (
          <>
            <NewsList
              newsList={newsList}
              variant={variant}
              isLoading={isLoading}
              pageSize={PAGE_SIZE}
            />
            <Pagination
              className={s.pagination}
              isPrevPageDisabled={isLoading || page === 1}
              isNextPageDisabled={isLoading || page === totalPages}
              onPrevPage={() => setPage((prev) => prev - 1)}
              onNextPage={() => setPage((prev) => prev + 1)}
            />
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
