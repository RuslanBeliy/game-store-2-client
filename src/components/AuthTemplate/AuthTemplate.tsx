import { FC, PropsWithChildren } from 'react';

import s from './AuthTemplate.module.scss';

import { Title } from '..';

interface Props extends PropsWithChildren {
  title: string;
}

export const AuthTemplate: FC<Props> = ({ title, children }) => {
  return (
    <div className={s.authTemplate}>
      <Title className={s.title} size='38px'>
        {title}
      </Title>
      {children}
    </div>
  );
};
