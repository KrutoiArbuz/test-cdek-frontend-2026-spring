import type { Meta, StoryObj } from '@storybook/react-vite';

import ErrorState from './ErrorState';

const meta: Meta<typeof ErrorState> = {
  title: 'WidgetUI/ErrorState',
  component: ErrorState,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
  args: {},
};
