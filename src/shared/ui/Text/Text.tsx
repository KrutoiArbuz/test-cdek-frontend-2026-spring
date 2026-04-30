import clsx from 'clsx';

import s from './Text.module.scss';

export type TextProps = {
  children: React.ReactNode;
  className?: string;
  font?: 'primary' | 'secondary';
  weight?: 'regular' | 'demiBold';
  view?: 'p21' | 'p15.75' | 'p14' | 'p12.25' | 'p10.5';
  color?: 'primary' | 'secondary';
  tag?: 'p' | 'span' | 'div' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  maxLines?: number;
};

const viewClassMap: Record<string, string> = {
  p21: s.text_p21,
  'p15.75': s.text_p15_75,
  p14: s.text_p14,
  'p12.25': s.text_p12_25,
  'p10.5': s.text_p10_5,
};

const weightClassMap: Record<string, string> = {
  regular: s.text_weightRegular,
  demiBold: s.text_weightDemiBold,
};

const colorClassMap: Record<string, string> = {
  primary: s.text_colorPrimary,
  secondary: s.text_colorSecondary,
};

const fontClassMap: Record<string, string> = {
  primary: s.text_fontPrimary,
  secondary: s.text_fontSecondary,
};

const Text = ({ children, className, font, weight, view, color, tag, maxLines }: TextProps) => {
  const Tag = tag || 'div';
  const textClass = clsx(
    s.text,
    viewClassMap[view || 'p15.75'],
    weightClassMap[weight || 'regular'],
    colorClassMap[color || 'primary'],
    font && fontClassMap[font],
    className
  );

  const styles = maxLines ? ({ '--max-lines': maxLines } as React.CSSProperties) : undefined;

  return (
    <Tag className={textClass} style={styles}>
      {children}
    </Tag>
  );
};

export default Text;
