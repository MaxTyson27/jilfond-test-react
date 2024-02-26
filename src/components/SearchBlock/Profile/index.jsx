import { observer } from 'mobx-react-lite';
import { store } from '../../../store';

import avatar from '../../../images/profile-avatar.png';

import styles from './index.module.scss';
import { Contacts } from './Contacts';
import { About } from './About';

const LABLES = {
  SEARCH_TEXT: 'Выберите сотрудника, чтобы посмотреть его профиль',
}

const Profile = observer(() => {
  const { selectedEmployee } = store;

  const renderSearchText = () => {
    if (selectedEmployee) return null;

    return (
      <p className={ styles['search-text'] }>{ LABLES.SEARCH_TEXT }</p>
    )
  }

  const renderProfile = () => {
    if (!selectedEmployee) return null;

    const {
      name,
      email,
      phone,
      company: {
        catchPhrase,
      },
    } = selectedEmployee;

    const contactsProps = {
      email,
      phone,
    }

    return (
      <div className={ styles.profile }>
        <img src={ avatar } alt="avatar employee" />
        <div className={ styles.content }>
          <h5 className={ styles.name }>{ name }</h5>
          <Contacts
            contacts={ contactsProps }
          />
          <About 
            content={ catchPhrase }
          />
        </div>
      </div>
    )
  }

  return (
    <div className={ styles.wrap }>
      { renderSearchText() }
      { renderProfile() }
    </div>
  )
})

export { Profile };
