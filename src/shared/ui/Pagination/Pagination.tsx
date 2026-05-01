import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import clsx from 'clsx';

import IconButton from '../IconButton/IconButton';

import s from './Pagination.module.scss';

type PaginationProps = {
  className?: string;
  onPrevPage?: () => void;
  onNextPage?: () => void;
  isPrevPageDisabled?: boolean;
  isNextPageDisabled?: boolean;
};

const Pagination = ({
  className,
  onPrevPage,
  onNextPage,
  isPrevPageDisabled,
  isNextPageDisabled,
}: PaginationProps) => {
  const paginationClass = clsx(s.pagination, className);

  return (
    <div className={paginationClass}>
      <IconButton onClick={onPrevPage} disabled={isPrevPageDisabled} aria-label="Previous page">
        <IconArrowLeft size={17.5} strokeWidth={2} />
      </IconButton>

      <IconButton onClick={onNextPage} disabled={isNextPageDisabled} aria-label="Next page">
        <IconArrowRight size={17.5} strokeWidth={2} />
      </IconButton>
    </div>
  );
};

export default Pagination;
