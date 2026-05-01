import clsx from 'clsx';

import Text from '@/shared/ui/Text';

import s from './NewsFeedHeader.module.scss';

type NewsFeedHeaderProps = {
  className?: string;
  titleText: string;
  secondaryText: React.ReactNode;
};

const NewsFeedHeader = ({ className, titleText, secondaryText }: NewsFeedHeaderProps) => {
  const NewsFeedHeaderClass = clsx(s.newsFeedHeader, className);
  return (
    <div className={NewsFeedHeaderClass}>
      <Text tag="h2" view="p21" weight="demiBold">
        {titleText}
      </Text>
      <Text tag="span" view="p12.25" color="secondary">
        {secondaryText}
      </Text>
    </div>
  );
};

export default NewsFeedHeader;
