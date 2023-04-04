import { RootState } from '..';

export const authSelector = (state: RootState) => state.auth;
export const firstLoadingSelector = (state: RootState) => state.auth.firstLoading;
