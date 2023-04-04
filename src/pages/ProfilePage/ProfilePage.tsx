import { FC } from 'react';

import s from './ProfilePage.module.scss';

import { Container, UserProfile } from '../../components';

interface Props {}

export const ProfilePage: FC<Props> = () => {
  return (
    <Container className={s.profilePage}>
      <UserProfile />
    </Container>
  );
};
