import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { RootState } from 'app/store/store';
import { clearUser, updateToken } from '../model/slices';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }: { getState: () => unknown }) => {
    const rootState = getState() as RootState;
    const token = rootState.user.token;

    if (token) headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery('refresh', api, extraOptions);

    if (refreshResult?.data) {
      api.dispatch(updateToken(refreshResult.data));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(clearUser());
    }
  }

  return result;
};

export const apiConfig = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['User'],
  endpoints: () => ({}),
});
