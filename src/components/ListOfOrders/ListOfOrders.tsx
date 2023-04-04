import { FC } from 'react';

import s from './ListOfOrders.module.scss';

import { Title } from '..';
import { useAppSelector } from '../../hooks';
import { orderSelector } from '../../store/order/orderSelector';
import { formateDate } from '../../utils';

interface Props {}

export const ListOfOrders: FC<Props> = () => {
  const { order } = useAppSelector(orderSelector);
  return (
    <div className={s.listOfOrders}>
      {order.length ? (
        order.map((el) => (
          <div className={s.order} key={el._id}>
            <Title size='24px' className={s.title}>
              {formateDate(el.createdAt)}
            </Title>
            <table>
              <thead>
                <tr>
                  <th>Игра</th>
                  <th>Платформа</th>
                  <th>Количество</th>
                  <th>Цена</th>
                </tr>
              </thead>
              {el.order.map((item) => (
                <tbody key={item._id + item.platform}>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.platform}</td>
                    <td>{item.amount}</td>
                    <td>{(item.price * item.amount).toFixed(2)}$</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ))
      ) : (
        <Title>У вас нет заказов</Title>
      )}
    </div>
  );
};
