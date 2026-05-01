import type { Meta, StoryObj } from '@storybook/react-vite';

import type { NewsDto } from '../../types/newsType';

import NewsCard from './NewsCard';

const meta: Meta<typeof NewsCard> = {
  title: 'WidgetComponents/NewsCard',
  component: NewsCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsCard>;

const mockNews: NewsDto = {
  id: '5bc71782-73f6-46bb-b1ad-c1ab94ee45dd',
  title: 'Встречаемся в СДЭК',
  cover: {
    type: 'gallery',
    images: [
      {
        s: '/assets/newsCover_1775225203-s.png',
        m: '/assets/newsCover_1775225203-m.png',
        l: '/assets/newsCover_1775225203-l.png',
        hd: '/assets/newsCover_1775225203-hd.png',
      },
      {
        s: '/assets/newsCover_1775225117-s.png',
        m: '/assets/newsCover_1775225117-m.png',
        l: '/assets/newsCover_1775225117-l.png',
        hd: '/assets/newsCover_1775225117-hd.png',
      },
    ],
  },
  likeCount: 1,
  viewCount: 28,
  publishedAt: '2026-04-03T13:59:05Z',
  rubrics: [
    {
      id: 10,
      name: 'Важное для работы',
      slug: 'top',
    },
  ],
  directions: [
    {
      id: 3,
      name: 'CDEK',
      slug: 'cdek',
    },
  ],
};

export const Default: Story = {
  args: {
    variant: 'news',
    news: mockNews,
    hideCoverOnMobile: false,
    hideCover: false,
    isTop: false,
  },
};

export const BusinessVariant: Story = {
  args: {
    variant: 'business',
    news: mockNews,
    hideCoverOnMobile: false,
    hideCover: false,
    isTop: true,
  },
};
