import { api } from '@/shared/api/api';

import type { NewsPagesDto, NewsPagesParamsApi } from '../types/newsType';

export const getNewsPages = async (
  { perPage, page }: NewsPagesParamsApi,
  signal?: AbortSignal
): Promise<NewsPagesDto> => {
  const response = await api.get('/news/feed/company/short', {
    signal,
    params: { perPage, page },
  });
  return response.data;
};

export const getNewsPagesEmpty = async (
  { perPage, page }: NewsPagesParamsApi,
  signal?: AbortSignal
): Promise<NewsPagesDto> => {
  const response = await api.get('/news/feed/company/empty', {
    signal,
    params: { perPage, page },
  });
  return response.data;
};
