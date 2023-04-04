import { useRef } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebounce = () => {
  const id = useRef<null | number>(null);
  return (cb: () => void, delay: number) => {
    if (id.current) {
      clearTimeout(id.current);
    }
    id.current = setTimeout(cb, delay);
  };
};

export const useIsAuth = () => {
  const isAuth = useAppSelector((state) => !!state.auth.token);
  return isAuth;
};
