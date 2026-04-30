import clsx from 'clsx';

import s from './IconButton.module.scss';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  'aria-label': string;
};

const IconButton = ({
  children,
  className,
  type = 'button',
  disabled,
  ...props
}: IconButtonProps) => {
  const iconButtonClass = clsx(s.iconButton, className);

  return (
    <button className={iconButtonClass} type={type} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
