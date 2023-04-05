import { FC, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import s from './OrderPage.module.scss';

import { Container, ListOfOrders, Title } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { orderSelector } from '../../store/order/orderSelector';
import { getOrders } from '../../store/order/orderSlice';
import { ErrorPage } from '../ErrorPage';

interface Props {}

export const OrderPage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector(orderSelector);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  if (errorMessage) {
    return <ErrorPage message={errorMessage} />;
  }

  return (
    <Container className={s.orderPage}>
      <Title className={s.title} size='38px'>
        Ваши заказы
      </Title>
      {isLoading ? <InfinitySpin width='200' color='#8b38c2' /> : <ListOfOrders />}
    </Container>
  );
};
