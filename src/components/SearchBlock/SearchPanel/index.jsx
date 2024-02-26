import { Employes } from './Employes';
import { Search } from './Search';

import styles from './index.module.scss';

const SearchPanel = () => {
  return (
    <div className={ styles['search-panel'] }>
      <Search />
      <Employes />
    </div>
  )
}

export { SearchPanel };
