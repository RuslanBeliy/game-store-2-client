import { FC } from 'react';

import s from './RegisterPage.module.scss';

import { AuthTemplate, Container, Register } from '../../components';

interface Props {}

export const RegisterPage: FC<Props> = () => {
  return (
    <Container className={s.registerPage}>
      <AuthTemplate title='Регистрация'>
        <Register />
      </AuthTemplate>
    </Container>
  );
};
