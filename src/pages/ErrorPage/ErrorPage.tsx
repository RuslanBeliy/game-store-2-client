import { FC } from 'react';

import s from './ErrorPage.module.scss';

import { ButtonLink, Container, Title } from '../../components';
import { routes } from '../../router/routes';

interface Props {
  message: string;
  notFound?: boolean;
}

export const ErrorPage: FC<Props> = ({ message, notFound = false }) => {
  return (
    <Container className={s.error}>
      <Title>Ошибка: {message}</Title>
      {notFound && (
        <ButtonLink className={s.back} to={routes.index}>
          Вернуться на главную
        </ButtonLink>
      )}
    </Container>
  );
};
