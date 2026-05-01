import clsx from 'clsx';

import Text from '@/shared/ui/Text/Text';

import s from './Badge.module.scss';
type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  color?: 'gray' | 'blue' | 'yellow';
  borderRadius?: number | string;
  icon?: React.ReactNode;
};

const colorClassMap: Record<string, string> = {
  gray: s.badge_gray,
  blue: s.badge_blue,
  yellow: s.badge_yellow,
};

const Badge = ({ children, className, color = 'gray', borderRadius, icon }: BadgeProps) => {
  const badgeClass = clsx(s.badge, colorClassMap[color], className);
  return (
    <div className={badgeClass} style={{ borderRadius }}>
      {icon && <span className={s.icon}>{icon}</span>}
      <Text font="primary" view="p10.5" tag="span">
        {children}
      </Text>
    </div>
  );
};

export default Badge;
