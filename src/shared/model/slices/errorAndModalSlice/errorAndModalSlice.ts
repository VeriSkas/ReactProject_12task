import {
  Middleware,
  MiddlewareAPI,
  PayloadAction,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';

import { ErrorAndModalState } from './types';
import { errorMessageHandler } from 'shared/lib/utils/errorHandler';

const initialState: ErrorAndModalState = {
  error: [],
  showModal: false,
};

export const errorAndModalSlice = createSlice({
  name: 'errorAndModal',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = [...state.error, action.payload];
    },
    clearError: (state) => {
      state.error = [];
    },
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const errorMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    api.dispatch(setError(errorMessageHandler(action.payload)));
  }

  return next(action);
};

export const { setError, clearError, toggleModal } = errorAndModalSlice.actions;

export default errorAndModalSlice.reducer;
