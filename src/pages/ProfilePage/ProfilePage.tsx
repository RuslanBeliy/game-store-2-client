import { FC } from 'react';

import s from './ProfilePage.module.scss';

import { Container, UserProfile } from '../../components';

interface Props {}

const ProfilePage: FC<Props> = () => {
  return (
    <Container className={s.profilePage}>
      <UserProfile />
    </Container>
  );
};

export default ProfilePage;
