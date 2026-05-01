export type NewsPagesDto = {
  totalPages: number;
  perPage: number;
  news: NewsDto[];
  minDatePublication: string;
};

export type NewsDto = {
  id: string;
  title: string;
  cover: NewsCoverDto;
  likeCount: number;
  viewCount: number;
  publishedAt: string;
  rubrics: NewsRubricDto[];
  directions?: NewsDirectionDto[];
};

export type NewsCoverDto = {
  type: string;
  images: NewsImageDto[];
};

export type NewsImageDto = {
  s: string;
  m: string;
  l: string;
  hd: string;
};

export type NewsRubricDto = {
  id: number;
  slug: string;
  name: string;
};

export type NewsDirectionDto = {
  id: number;
  slug: string;
  name: string;
};

export type NewsPagesParamsApi = {
  perPage: number;
  page: number;
};
