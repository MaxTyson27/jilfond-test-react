import { Profile } from './Profile';
import { SearchPanel } from './SearchPanel';

import styles from './index.module.scss';

const SearchBlock = () => {
  return (
    <div className={ styles['search-block'] }>
      <SearchPanel />
      <Profile />
    </div>
  )
}

export { SearchBlock };
