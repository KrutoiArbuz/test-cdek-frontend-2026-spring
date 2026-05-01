import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import Divider from '@/shared/ui/Divider';
import Pagination from '@/shared/ui/Pagination';
import Skeleton from '@/shared/ui/Skeleton';
import { formatMonthYear } from '@/shared/utils/formatDate';

import s from './NewsFeed.module.scss';
import { pageVariants } from './animations';
import NewsFeedHeader from './components/NewsFeedHeader';
import NewsList from './components/NewsList';
import { useNewsPagesQuery } from './hooks/useNewsQueries';
import type { NewsDto } from './types/newsType';
import EmptyState from './ui/EmptyState';
import ErrorState from './ui/ErrorState';

type NewsFeedProps = {
  variant: 'news' | 'business';
  empty?: boolean;
  className?: string;
};

const PAGE_SIZE = 3;

const NewsFeed = ({ variant, empty, className }: NewsFeedProps) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useNewsPagesQuery({
    page,
    perPage: PAGE_SIZE,
    empty,
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
    <div className={clsx(s.newsFeedRoot, className)}>
      <div className={s.newsFeed}>
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <NewsList
                    newsList={newsList}
                    variant={variant}
                    isLoading={isLoading}
                    pageSize={PAGE_SIZE}
                  />
                </motion.div>
              </AnimatePresence>
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
    </div>
  );
};

export default NewsFeed;
