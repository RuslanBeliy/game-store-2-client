import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import s from './CartPage.module.scss';

import { BasketList, Button, Container, Title } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { routes } from '../../router/routes';
import { cartSelector } from '../../store/cart/cartSelector';
import { cartActions } from '../../store/cart/cartSlice';
import { createOrder } from '../../store/order/orderSlice';

interface Props {}

export const CartPage: FC<Props> = () => {
  const { countGames, totalPrice, cart } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };
  const handleCreateOrder = async () => {
    await dispatch(createOrder(cart));
    dispatch(cartActions.clearCart());
    toast.success('Ваш заказ принят');
    navigate(routes.order);
  };

  return (
    <Container className={s.cartPage}>
      <Title className={s.title}>Корзина</Title>
      {countGames > 0 ? (
        <>
          <div className={s.clearCart}>
            <button onClick={clearCart}>Очистить корзину</button>
          </div>
          <BasketList />
          <div className={s.finishOrder}>
            <div className={s.totalAmount}>Общая сумма: {totalPrice}$</div>
            <div className={s.totalProducts}>Количество товара: {countGames}</div>
            <Button onClick={handleCreateOrder}>Купить</Button>
          </div>
        </>
      ) : (
        <Title className={s.emptyCart} size='38px'>
          Корзина пустая
        </Title>
      )}
    </Container>
  );
};
