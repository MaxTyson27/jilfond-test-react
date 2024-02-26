import { observer } from "mobx-react-lite";

import { store } from "../../store";

const LABELS = {
  START_SEARCH: 'начните поиск',
  NOT_FOUND: 'ничего не найдено',
  LOADING: 'подождите...',
  ERROR: 'произошла ошибка, попробуйте позже'
}

const Status = observer(() => {
  const { employes, searchQuery, isLoading, isError } = store;

  const renderNotFound = () => {
    if (searchQuery && !employes.length && !isLoading && !isError) {
      return <p>{ LABELS.NOT_FOUND }</p>;
    }
    
    return null;
  }

  const renderStartSearch = () => {
    if (!searchQuery && !employes.length && !isLoading && !isError) {
      return <p>{ LABELS.START_SEARCH }</p>;
    }

    return null;
  }

  const renderLoading = () => {
    if (!isLoading) return null;

    return <p>{ LABELS.LOADING }</p>
  }

  const renderError = () => {
    if (!isError) return null;

    return <p>{ LABELS.ERROR }</p>
  }

  return (
    <>
      { renderNotFound() }
      { renderStartSearch() }
      { renderLoading() }
      { renderError() }
    </>
  )
})

export { Status };
