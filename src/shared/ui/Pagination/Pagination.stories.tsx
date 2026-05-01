import type { Meta, StoryObj } from '@storybook/react-vite';

import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Shared/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    onNextPage: () => alert('Next page'),
    onPrevPage: () => alert('Previous page'),
    isPrevPageDisabled: false,
    isNextPageDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    isPrevPageDisabled: true,
    isNextPageDisabled: true,
  },
};
