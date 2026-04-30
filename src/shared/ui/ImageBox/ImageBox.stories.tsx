import type { Meta, StoryObj } from '@storybook/react-vite';

import ImageBox from './ImageBox';

const meta: Meta<typeof ImageBox> = {
  title: 'Shared/ImageBox',
  component: ImageBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageBox>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder Image',
    width: 150,
    height: 150,
  },
};
