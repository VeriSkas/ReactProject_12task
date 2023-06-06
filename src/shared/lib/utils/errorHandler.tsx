import { useEffect, useState } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

import { useMyDispatch, useMySelector } from './storeHooks';
import { clearError } from 'shared/model/slices/errorAndModalSlice/errorAndModalSlice';

export const useError = (): { show: boolean; onClose: () => void; message: string } => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useMyDispatch();
  const errors = useMySelector((state) => state.errorAndModal.error);

  useEffect(() => {
    if (errors.length) {
      setShow(true);
      setMessage(errors[0]);

      setTimeout(() => {
        setShow(false);
        setMessage('');
        dispatch(clearError());
      }, 3000);
    }
  }, [errors.length]);

  const onClose = (): void => {
    setShow(false);
    setMessage('');
    dispatch(clearError());
  };

  return { show, onClose, message };
};

export const errorMessageHandler = (error: FetchBaseQueryError | SerializedError): string => {
  return 'status' in error
    ? 'error' in error
      ? error.error
      : (error.data as { errorMessage: string }).errorMessage
    : error.message ?? '';
};
