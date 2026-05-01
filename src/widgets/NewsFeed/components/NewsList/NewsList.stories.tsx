import type { Meta, StoryObj } from '@storybook/react-vite';

import type { NewsDto } from '../../types/newsType';

import NewsList from './NewsList';

const meta: Meta<typeof NewsList> = {
  title: 'WidgetComponents/NewsList',
  component: NewsList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NewsList>;

const baseCover: NewsDto['cover'] = {
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
};

const altCover: NewsDto['cover'] = {
  type: 'single',
  images: [
    {
      s: '/assets/newsCover_1775225117-s.png',
      m: '/assets/newsCover_1775225117-m.png',
      l: '/assets/newsCover_1775225117-l.png',
      hd: '/assets/newsCover_1775225117-hd.png',
    },
  ],
};

const baseNews: NewsDto = {
  id: '5bc71782-73f6-46bb-b1ad-c1ab94ee45dd',
  title: 'Встречаемся в СДЭК',
  cover: baseCover,
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

const newsListMock: NewsDto[] = [
  baseNews,
  {
    ...baseNews,
    id: 'd9f2df8b-8f0c-4b57-9d25-6c66f9f45ef7',
    title: 'Как оформить международную доставку без стресса',
    cover: altCover,
    likeCount: 18,
    viewCount: 214,
    publishedAt: '2026-04-10T09:15:00Z',
    rubrics: [
      {
        id: 12,
        name: 'Логистика',
        slug: 'logistics',
      },
    ],
    directions: [
      {
        id: 2,
        name: 'B2B',
        slug: 'b2b',
      },
    ],
  },
  {
    ...baseNews,
    id: '1fd322fb-4f40-4f5a-8f4f-0fdb54a2b9a3',
    title: 'Обновили интерфейс личного кабинета',
    likeCount: 6,
    viewCount: 95,
    publishedAt: '2026-04-18T16:30:00Z',
    rubrics: [
      {
        id: 11,
        name: 'Продукт',
        slug: 'product',
      },
      {
        id: 14,
        name: 'Полезно знать',
        slug: 'tips',
      },
    ],
    directions: [
      {
        id: 6,
        name: 'IT',
        slug: 'it',
      },
    ],
  },
  {
    ...baseNews,
    id: '7b7e1f6e-88c9-4c3a-84ce-6f7f7b6bdf1c',
    title: 'График работы отделений в майские',
    cover: altCover,
    likeCount: 3,
    viewCount: 63,
    publishedAt: '2026-04-28T07:45:00Z',
    rubrics: [
      {
        id: 13,
        name: 'Компания',
        slug: 'company',
      },
    ],
    directions: [
      {
        id: 3,
        name: 'CDEK',
        slug: 'cdek',
      },
      {
        id: 5,
        name: 'HR',
        slug: 'hr',
      },
    ],
  },
];

export const Default: Story = {
  args: {
    variant: 'news',
    newsList: newsListMock,
  },
};

export const BusinessVariant: Story = {
  args: {
    variant: 'business',
    newsList: newsListMock,
  },
};
