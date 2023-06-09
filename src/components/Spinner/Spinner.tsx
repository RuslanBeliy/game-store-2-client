import { InfinitySpin } from 'react-loader-spinner';

import s from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={s.loader}>
      <InfinitySpin width='200' color='#8b38c2' />
    </div>
  );
};
