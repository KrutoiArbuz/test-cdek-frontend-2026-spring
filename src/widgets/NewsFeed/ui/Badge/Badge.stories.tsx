import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconStarFilled } from '@tabler/icons-react';

import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'WidgetUI/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Hello, World!',
  },
};

export const Blue: Story = {
  args: {
    children: 'Hello, World!',
    color: 'blue',
  },
};

export const Yellow: Story = {
  args: {
    children: 'Топ новость',
    icon: <IconStarFilled size={12.25} />,
    color: 'yellow',
    borderRadius: '100px',
  },
};
