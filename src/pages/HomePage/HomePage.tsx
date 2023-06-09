import { FC, useEffect, useRef } from 'react';

import s from './HomePage.module.scss';

import {
  ChoisePlatform,
  Container,
  Filter,
  Input,
  ListOfGames,
  Pagination,
} from '../../components';
import { useAppDispatch, useAppSelector, useDebounce } from '../../hooks';
import { filterSelector } from '../../store/filter/filterSelector';
import { filterActions } from '../../store/filter/filterSlice';
import { gamesSelector } from '../../store/games/gamesSelector';
import { gamesActions, getAllGames } from '../../store/games/gamesSlice';
import { filterRequest } from '../../utils';
import { ErrorPage } from '../ErrorPage';

interface Props {}

const HomePage: FC<Props> = () => {
  const { countItems, errorMessage } = useAppSelector(gamesSelector);
  const filterParams = useAppSelector(filterSelector);
  const dispatch = useAppDispatch();
  const isFirstRender = useRef(true);
  const currentPage = useRef(1);
  const debounce = useDebounce();
  const countPages = Math.ceil(countItems / 8);

  const handleCurrentPage = (numPage: number) => {
    currentPage.current = numPage;
    const data = filterRequest(filterParams, currentPage.current);
    dispatch(getAllGames(data));
    window.scrollTo({ top: 0 });
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounce(() => dispatch(filterActions.setSearchText(e.target.value)), 300);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    currentPage.current = 1;
    const data = filterRequest(filterParams);
    dispatch(getAllGames(data));
  }, [filterParams]);

  useEffect(() => {
    dispatch(getAllGames());

    return () => {
      dispatch(gamesActions.defaultGameSate());
      dispatch(filterActions.resetFilters());
    };
  }, []);

  if (errorMessage) {
    return <ErrorPage message={errorMessage} />;
  }

  return (
    <Container className={s.homePage}>
      <div className={s.topFilter}>
        <Input onChange={handleSearchInput} placeholder='Искать в магазине' variant='search' />
        <ChoisePlatform />
      </div>
      <div className={s.wrap}>
        <ListOfGames className={s.listOfGames} />
        <Filter className={s.filter} />
      </div>
      {countPages > 1 && (
        <Pagination
          currentPage={currentPage.current}
          setCurrentPage={(num) => handleCurrentPage(num)}
          countPages={countPages}
          className={s.pagination}
        />
      )}
    </Container>
  );
};

export default HomePage;
