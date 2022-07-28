import styles from './FormControls.css';
import classNames from 'classnames';

export function FormControls({ label, className: customClassName, children }) {
  const className = classNames(
    styles.FormControls,
    customClassName
  );

  return (
    <label className={className}>
      <Label text={label} />
      {children}
    </label>
  );
}

function Label({ text }){
  return <span className="theme-font">{text}</span>;
}

export function InputControl({ label, className, ...rest }){
  return (
    <FormControls label={label} className={className} >
      <input {...rest} />
    </FormControls>
  );
}

export function SelectControl({ label, children, ...rest }){
  return(
    <FormControls label={label} >
      <select {...rest}>{children}</select>
    </FormControls> 
  );
}

export function TextAreaControl({
  label, 
  ...rest
}){
  return(
    <FormControls label={label} >
      <textarea {...rest} ></textarea>
    </FormControls> 
  );
}

export function FormButton({ children }){
  return(
    <button className={styles.FormButton}>
      {children}
    </button>
  );
}

export function Fieldset({ legend, children }){
  return(
    <fieldset className={styles.Fieldset}>
      <legend className="theme-font">{legend}</legend>
      {children}
    </fieldset>
  );
}



