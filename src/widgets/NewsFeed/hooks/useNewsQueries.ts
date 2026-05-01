import { useQuery } from '@tanstack/react-query';

import { getNewsPages, getNewsPagesEmpty } from '../api/news';
import type { NewsPagesParamsApi } from '../types/newsType';

export const useNewsPagesQuery = (params: NewsPagesParamsApi & { empty?: boolean }) =>
  useQuery({
    queryKey: ['news', params.page, params.perPage, params.empty],
    queryFn: ({ signal }) => {
      const { empty, ...apiParams } = params;
      return empty ? getNewsPagesEmpty(apiParams, signal) : getNewsPages(apiParams, signal);
    },
  });
