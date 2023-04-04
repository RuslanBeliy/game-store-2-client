import { FC, useEffect, useRef, useState } from 'react';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import s from './Register.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { routes } from '../../router/routes';
import { authSelector } from '../../store/auth/authSelector';
import { authRegister } from '../../store/auth/authSlice';
import { uploadImageSelector } from '../../store/uploadImage/uploadImageSelector';
import { uploadImage, uploadImageActions } from '../../store/uploadImage/uploadImageSlice';
import { AuthServerResponse } from '../../types/Auth';
import { registerValidation, setTokenLS } from '../../utils';
import { Button } from '../Button';
import { Input } from '../Input';

interface Props {}

export const Register: FC<Props> = () => {
  const [textFields, setTextFields] = useState({ userName: '', email: '', password: '' });
  const [validation, setValidation] = useState<{ name: string; mess: string }[]>([]);
  const dispatch = useAppDispatch();
  const { imageUrl } = useAppSelector(uploadImageSelector);
  const { token } = useAppSelector(authSelector);
  const fileRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    dispatch(uploadImage(formData));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = registerValidation(textFields);

    if (errors.length) {
      setValidation(errors);
      return;
    }

    const res = await dispatch(authRegister({ ...textFields, avatarUrl: imageUrl }));

    if (res.meta.requestStatus === 'rejected') {
      toast.warning(res.payload?.toString());
      return;
    }

    const { token } = res.payload as AuthServerResponse;
    setTokenLS(token);
    toast.success('Вы зарегистрировались');
    navigate(routes.index);
  };

  return (
    <form onSubmit={onSubmit} className={s.register}>
      <div className={s.addAvatar}>
        <input onChange={handleFileInput} ref={fileRef} type='file' style={{ display: 'none' }} />
        {imageUrl ? (
          <div className={s.img}>
            <img onClick={() => fileRef.current?.click()} src={imageUrl} alt='Avatar' />
            <AiOutlineCloseCircle onClick={() => dispatch(uploadImageActions.resetUploadImage())} />
          </div>
        ) : (
          <AiOutlineUserAdd onClick={() => fileRef.current?.click()} />
        )}
      </div>

      <Input
        errorMessage={validation.reduce(
          (acc, err) => (err.name === 'userName' ? (acc += err.mess) : acc),
          ''
        )}
        onChange={onChange}
        value={textFields.userName}
        name='userName'
        placeholder='Вашe имя...'
        type='text'
      />
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
      <Button>Зарегистрироваться</Button>
    </form>
  );
};
