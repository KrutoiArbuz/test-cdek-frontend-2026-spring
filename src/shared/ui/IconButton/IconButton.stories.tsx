import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconArrowRight } from '@tabler/icons-react';

import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Shared/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <IconArrowRight size={48} strokeWidth={2} />,
    'aria-label': 'Button',
  },
};

export const Disabled: Story = {
  args: {
    children: <IconArrowRight size={48} strokeWidth={2} />,
    'aria-label': 'Button',
    disabled: true,
  },
};
