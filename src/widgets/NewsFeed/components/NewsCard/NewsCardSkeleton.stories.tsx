import type { Meta, StoryObj } from '@storybook/react-vite';

import NewsCardSkeleton from './NewsCardSkeleton';

const meta: Meta<typeof NewsCardSkeleton> = {
  title: 'WidgetComponents/NewsCardSkeleton',
  component: NewsCardSkeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsCardSkeleton>;

export const NewsWithCover: Story = {
  args: { variant: 'news', hideCover: false },
};

export const NewsNoCover: Story = {
  args: { variant: 'news', hideCover: true },
};

export const BusinessWithCover: Story = {
  args: { variant: 'business', hideCover: false },
};

export const BusinessNoCover: Story = {
  args: { variant: 'business', hideCover: true },
};
