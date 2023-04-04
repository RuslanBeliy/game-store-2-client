import { FC } from 'react';

import s from './LoginPage.module.scss';

import { AuthTemplate, Container, Login } from '../../components';

interface Props {}

export const LoginPage: FC<Props> = () => {
  return (
    <Container className={s.loginPage}>
      <AuthTemplate title='Вход'>
        <Login />
      </AuthTemplate>
    </Container>
  );
};
