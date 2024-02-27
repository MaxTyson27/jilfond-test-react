import { observer } from 'mobx-react-lite';
import { service } from '../../../../service';
import { store } from '../../../../store';
import { debounce } from '../../../../utils/debounce';

import { Input } from '../../../Input';

import styles from './index.module.scss';
import { useCallback } from 'react';

const LABELS = {
  SEARCH_EMPLOYES: 'Поиск сотрудников',
  INPUT_PLACEHOLDER: 'Введите Id или имя',
}

const DEBOUNCE_MS = 500;

const Search = observer(() => {
  const { searchQuery } = store;
  const { getEmployes } = service;

  const debouncFn = useCallback(debounce(getEmployes, DEBOUNCE_MS), [])

  const handleSearchEmployes = (value) => {
    service.handleSearchEmployes(value);
    debouncFn();
  }

  return (
    <div className={ styles.search }>
      <h4 className={ styles.title }>{ LABELS.SEARCH_EMPLOYES }</h4>
      <Input
        placeholder={ LABELS.INPUT_PLACEHOLDER }
        onChange={ handleSearchEmployes }
        value={ searchQuery }
      />
    </div>
  )
})

export { Search };
