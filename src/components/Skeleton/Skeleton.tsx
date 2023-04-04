import { FC } from 'react';
import ContentLoader from 'react-content-loader';

interface Props {}

export const Skeleton: FC<Props> = () => {
  return (
    <ContentLoader
      speed={5}
      width={200}
      height={380}
      viewBox='0 0 200 380'
      backgroundColor='#2a2a2a'
      foregroundColor='#4e4e4e'
    >
      <rect x='0' y='0' rx='10' ry='10' width='192' height='285' />
      <rect x='0' y='300' rx='10' ry='10' width='190' height='70' />
    </ContentLoader>
  );
};
