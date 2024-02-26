import styles from './index.module.scss';

const Contacts = ({ contacts }) => {
  const contactsElems = Object.keys(contacts).map((contact, idx) => (
    <p 
      key={ `${styles.contact}_${idx}` }
    >
      <strong>{ contact }</strong>: { contacts[contact] }
    </p>
  ))

  return (
    <div className={ styles.wrap }>
      { contactsElems }
    </div>
  )
}

export { Contacts };
