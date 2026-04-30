import { useQuery } from '@tanstack/react-query';

import { getNewsPages, getNewsPagesEmpty } from '../api/news';
import type { NewsPagesParamsApi } from '../types/newsType';

export const useNewsPagesQuery = (params: NewsPagesParamsApi) =>
  useQuery({
    queryKey: ['news', params.page, params.perPage],
    queryFn: async ({ signal }) => getNewsPages(params, signal),
  });

export const useNewsPagesEmptyQuery = (params: NewsPagesParamsApi) =>
  useQuery({
    queryKey: ['newsPagesEmpty', params.page, params.perPage],
    queryFn: async ({ signal }) => getNewsPagesEmpty(params, signal),
  });
