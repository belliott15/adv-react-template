import styles from './FormControls.css';
import classNames from 'classnames';

export function FormControls({ label, className: customClassName, children }) {
  const className = classNames(
    styles.FormControls,
    customClassName
  );

  return (
    <label className={className}>
      <label text={label} />
      {children}
    </label>
  );
}

export function InputControl({ label, className, ...rest }){
  return (
    <FormControls label={label} className={className} >
      <input {...rest} />
    </FormControls>
  );
}
