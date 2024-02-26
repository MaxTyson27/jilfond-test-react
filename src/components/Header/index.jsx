import styles from './index.module.scss';

const LABELS = {
  TITLE: 'Жилфонд',
  USER: 'Пользователь',
}

const Header = () => {
  return (
    <header>
      <h1 className={styles.title}>
        { LABELS.TITLE }
      </h1>
      <p className={styles.text}>
        { LABELS.USER }
      </p>
    </header>
  )
}

export { Header };
