import styles from './index.module.scss';

const LABLES = {
  TITLE: 'О себе:',
}

const About = ({ content }) => {
  return (
    <div className={ styles.about }>
      <h5>{ LABLES.TITLE }</h5>
      <p>{ content }</p>
    </div>
  )
}

export { About };
