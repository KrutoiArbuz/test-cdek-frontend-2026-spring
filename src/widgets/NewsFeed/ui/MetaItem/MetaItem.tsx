import clsx from 'clsx';

import Text from '@/shared/ui/Text/Text';

import s from './MetaItem.module.scss';

type MetaItemProps = {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconSize?: 'small' | 'medium';
};

const iconSizeMap: Record<string, string> = {
  small: s.icon_small,
  medium: s.icon_medium,
};

const MetaItem = ({ children, className, icon, iconSize }: MetaItemProps) => {
  const metaItemClass = clsx(s.metaItem, className);
  const iconClass = clsx(s.icon, iconSize ? iconSizeMap[iconSize] : undefined);

  return (
    <div className={metaItemClass}>
      {icon && <span className={iconClass}>{icon}</span>}
      <Text font="primary" view="p12.25">
        {children}
      </Text>
    </div>
  );
};

export default MetaItem;
