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
  const {
    setSearchQuery,
    searchQuery,
    setLoading,
    setError,
    // selectEmployee uncomment if need clear profile on every change input event
  } = store;

  const debouncFn = useCallback(debounce(service.getEmployes, DEBOUNCE_MS), [])

  const handleSearchEmployes = (value) => {
    setSearchQuery(value);
    setLoading(true);
    setError(false);
    // selectEmployee(null); uncomment if need clear profile on every change input event
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
