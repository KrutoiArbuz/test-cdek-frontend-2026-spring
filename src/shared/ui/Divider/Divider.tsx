import clsx from 'clsx';

import s from './Divider.module.scss';

type DividerProps = {
  className?: string;
};

const Divider = ({ className }: DividerProps) => {
  const dividerClass = clsx(s.divider, className);
  return <div className={dividerClass} />;
};

export default Divider;
