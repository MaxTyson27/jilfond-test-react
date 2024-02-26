import { observer } from 'mobx-react-lite'

import { store } from '../../store';

import avatar from '../../images/avatar.png';

import styles from './index.module.scss';

const Employee = observer(({ employee }) => {
  if (!employee) return null;

  const {
    selectEmployee,
    selectedEmployee,
  } = store;
  const {
    email,
    username,
    id,
  } = employee;

  const employeeStyles = [styles['employee-result']];

  if (selectedEmployee?.id === id) {
    employeeStyles.push(styles.active);
  }

  return (
    <div
      className={ employeeStyles.join(' ') }
      onClick={ () => selectEmployee(id) }
    >
      <img src={ avatar } alt="avatar employee" />
      <div className={ styles['employee-result-body'] }>
        <h5>{ username }</h5>
        <p>{ email }</p>
      </div>
    </div>
  )
});

export { Employee };
