import { FC } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';

import s from './UserProfile.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { authSelector } from '../../store/auth/authSelector';
import { authDelete } from '../../store/auth/authSlice';
import { formateDate } from '../../utils';
import { Button } from '../Button';

interface Props {}

export const UserProfile: FC<Props> = () => {
  const { user } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const formatedDate = formateDate(user?.createdAt ?? '');

  const deleteUser = () => {
    const res = window.confirm('Вы уверены, что хотите удалить свой аккаунт?');
    if (!res) return;
    dispatch(authDelete());
    toast.success('Аккаунт удалён');
  };

  return (
    <div className={s.userProfile}>
      <div className={s.img}>
        {user?.avatarUrl ? <img src={user?.avatarUrl} alt={user?.userName} /> : <BiUserCircle />}
      </div>
      <div className={s.info}>
        <div className={s.name}>
          <span>Имя:</span> {user?.userName}
        </div>
        <div className={s.email}>
          <span>Email:</span> {user?.email}
        </div>
        <div className={s.createdAt}>
          <span>Аккаунт создан:</span> {formatedDate}
        </div>

        <Button onClick={deleteUser} variant='red' size='sm'>
          Удалить аккаунт
        </Button>
      </div>
    </div>
  );
};
