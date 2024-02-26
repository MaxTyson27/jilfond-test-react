import styles from './index.module.scss';

const Input = ({
  placeholder = '',
  classname = '',
  onChange = () => {},
  value,
}) => {
  const inputStyles = [styles.input];

  if (classname) {
    inputStyles.push(classname);
  }

  const handleInputChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <input
      className={ inputStyles.join(' ') }
      placeholder={ placeholder }
      value={ value }
      onChange={ handleInputChange }
    />
  )
}

export { Input };
