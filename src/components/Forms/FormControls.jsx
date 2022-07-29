import styles from './FormControls.css';
import classNames from 'classnames';
import { Children, cloneElement } from 'react';


//Overview form control used on all controls
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

//used for checkbox and radio inputs
function Option({ text, type, ...rest }){
  return(
    <label className={styles.CheckboxLabel}>
      <input type={type} {...rest}/>
      {text}
    </label>
  );
}

export function CheckboxOption(props){
  return <Option type="checkbox"{...props} />;
}

export function RadioOption(props){
  return <Option type="radio" {...props}/>;
}

//separates different 
function LabelText({ text, as: Tag = 'span' }){
  if(!text) return null;

  const className = classNames(styles.Label, 'hightlight-font');
  return <Tag className={className}>{text}</Tag>;
}

export function OptionGroupControl({
  label, 
  name, 
  size = '100px', 
  children
}){
  return (
    <div className={styles.FormControls}>
      <fieldset>
        <LabelText text={label} as="legend" />
        <div className={styles.Options}
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(${size}, 1fr)`
          }}
        >
          {Children.map(children, (child) => 
            cloneElement(child, { name }))}
        </div>
      </fieldset>
    </div>
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

export function CheckBoxControl({ label, text, ...rest }){
  return (
    <div className={styles.FormControls}>
      <Label text={label} />
      <label className={styles.CheckboxLabel}>
        <input type="checkbox" {...rest}/>
        {text}
      </label>
    </div>
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




