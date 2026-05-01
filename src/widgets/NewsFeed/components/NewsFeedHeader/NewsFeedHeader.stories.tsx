import type { Meta, StoryObj } from '@storybook/react-vite';

import NewsFeedHeader from './NewsFeedHeader';

const meta: Meta<typeof NewsFeedHeader> = {
  title: 'WidgetComponents/NewsFeedHeader',
  component: NewsFeedHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsFeedHeader>;

export const Default: Story = {
  args: {
    titleText: 'Бизнес',
    secondaryText: 'Август, 2025',
  },
};
