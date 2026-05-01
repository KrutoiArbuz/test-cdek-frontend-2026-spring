import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconThumbUp } from '@tabler/icons-react';

import MetaItem from './MetaItem';

const meta: Meta<typeof MetaItem> = {
  title: 'WidgetUI/MetaItem',
  component: MetaItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MetaItem>;

export const Default: Story = {
  args: {
    children: '55',
    icon: <IconThumbUp />,
    iconSize: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: '55',
    icon: <IconThumbUp />,
    iconSize: 'small',
  },
};
