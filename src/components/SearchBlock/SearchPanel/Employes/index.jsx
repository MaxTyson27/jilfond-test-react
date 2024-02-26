import { observer } from 'mobx-react-lite'

import { store } from '../../../../store';

import { Employee } from '../../../Employee';

import styles from './index.module.scss';
import { Status } from '../../../Status';


const LABELS = {
  RESULTS: 'Результаты',
}

const Employes = observer(() => {
  const { employes } = store;

  const employesElems = employes.map(employee => (
    <Employee key={ employee.id } employee={ employee } />
  ));

  return (
    <div className={ styles.employes }>
      <h4 className={ styles.title }>{ LABELS.RESULTS }</h4>
      { employesElems }
      <Status />
    </div>
  )
});

export { Employes };
