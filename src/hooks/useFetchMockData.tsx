import { useEffect } from 'react';

import {
  setError,
  setLoading,
  setProducts,
} from '../store/products/productSlice';
import { useDispatch } from 'react-redux';

interface BaseError extends Error {
  message: string;
  code?: number;
}

export function useFetchMockData(url = 'mock.json') {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        dispatch(setProducts(json.products));
        dispatch(setError(null));
      } catch (err: unknown) {
        if ((err as BaseError).message) {
          dispatch(setError((err as BaseError).message));
        } else {
          dispatch(setError(String(err)));
        }
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [url]);
}
