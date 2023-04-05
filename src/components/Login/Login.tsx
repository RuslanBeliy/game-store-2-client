import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import s from './Login.module.scss';

import { useAppDispatch } from '../../hooks';
import { routes } from '../../router/routes';
import { authLogin } from '../../store/auth/authSlice';
import { AuthServerResponse } from '../../types/Auth';
import { loginValidation, setTokenLS } from '../../utils';
import { Button } from '../Button';
import { Input } from '../Input';

interface Props {}

export const Login: FC<Props> = () => {
  const [textFields, setTextFields] = useState({ email: '', password: '' });
  const [validation, setValidation] = useState<{ name: string; mess: string }[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = loginValidation(textFields);

    if (errors.length) {
      setValidation(errors);
      return;
    }

    const res = await dispatch(authLogin(textFields));

    if (res.meta.requestStatus === 'rejected') {
      toast.warning(res.payload?.toString());
      return;
    }
    const { token } = res.payload as AuthServerResponse;
    setTokenLS(token);
    toast.success('Вы вошли в свой аккаунт');
    navigate(routes.index);
  };
  return (
    <form onSubmit={onSubmit} className={s.login}>
      <Input
        errorMessage={validation.reduce(
          (acc, err) => (err.name === 'email' ? (acc += err.mess) : acc),
          ''
        )}
        onChange={onChange}
        value={textFields.email}
        name='email'
        placeholder='Ваш Email...'
        type='email'
      />
      <Input
        errorMessage={validation.reduce(
          (acc, err) => (err.name === 'password' ? (acc += err.mess) : acc),
          ''
        )}
        onChange={onChange}
        value={textFields.password}
        name='password'
        placeholder='Ваш пароль...'
        type='password'
      />
      <Button>Войти</Button>
    </form>
  );
};
