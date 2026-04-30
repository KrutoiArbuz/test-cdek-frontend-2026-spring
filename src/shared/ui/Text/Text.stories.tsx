import type { Meta, StoryObj } from '@storybook/react-vite';

import Text from './Text';
const meta: Meta<typeof Text> = {
  title: 'Shared/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Hello, World!',
  },
};

export const Heading: Story = {
  args: {
    tag: 'h2',
    view: 'p21',
    weight: 'demiBold',
    children: 'Section title',
  },
};

export const Body: Story = {
  args: {
    font: 'secondary',
    view: 'p15.75',
    children: 'Secondary font example',
  },
};

export const BodyDate: Story = {
  args: {
    font: 'secondary',
    color: 'secondary',
    view: 'p14',
    children: 'Muted secondary color',
  },
};

export const Badge: Story = {
  args: {
    view: 'p10.5',
    children: 'Badge text',
  },
};

export const HeaderDate: Story = {
  args: {
    tag: 'label',
    view: 'p12.25',
    color: 'secondary',
    children: 'Field label',
  },
};

export const EmptyState: Story = {
  args: {
    view: 'p15.75',
    weight: 'demiBold',
    children: 'Empty message',
  },
};

export const MaxLines: Story = {
  args: {
    view: 'p15.75',
    maxLines: 2,
    children:
      'Long text that should be truncated after two lines to demonstrate the maxLines behavior in the component.',
  },
  render: (args) => (
    <div style={{ maxWidth: 260 }}>
      <Text {...args} />
    </div>
  ),
};
