import type { Meta, StoryObj } from '@storybook/react-vite';

import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 1000,
    height: 150,
    borderRadius: 12,
  },
};
