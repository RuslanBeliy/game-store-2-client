import clsx from 'clsx';
import { FC } from 'react';

import s from './Pagination.module.scss';

interface Props {
  countPages: number;
  className?: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination: FC<Props> = ({ countPages, className, currentPage, setCurrentPage }) => {
  const handlePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const innerText = e.currentTarget.textContent;

    if (innerText && innerText.includes('<')) {
      return setCurrentPage(--currentPage);
    }
    if (innerText && innerText.includes('>')) {
      return setCurrentPage(++currentPage);
    }
    innerText && setCurrentPage(+innerText);
  };

  return (
    <div className={clsx(s.pagination, className)}>
      <button disabled={currentPage === 1} onClick={handlePage} className={s.btn}>
        {'<'}
      </button>
      {[...new Array(countPages)].map((_, i) => (
        <button
          disabled={i + 1 === currentPage}
          key={i}
          onClick={handlePage}
          className={clsx(s.btn, i + 1 === currentPage && s.active)}
        >
          {i + 1}
        </button>
      ))}
      <button disabled={currentPage === countPages} onClick={handlePage} className={s.btn}>
        {'>'}
      </button>
    </div>
  );
};
