import styles from './FormControls.css';
import classNames from 'classnames';
import { Children, cloneElement, forwardRef } from 'react';


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

const verifyValue = (props) => {
  if (Object.prototype.hasOwnProperty.call(props, 'value'))
    props.value = props.value ?? '';
};

function Label({ text }){
  return <span className="theme-font">{text}</span>;
}

export const InputControl = forwardRef((props, ref) => {
  const { label, className, children, ...rest } = props;
  verifyValue(rest);

  return (
    <FormControls label={label} className={className} >
      <input ref={ref} {...rest} />
      {children}
    </FormControls>
  );
});

InputControl.displayName = 'InputControl';

export const SelectControl = forwardRef((props, ref) => {
  const { label, children, ...rest } = props;
  verifyValue(rest);
  return(
    <FormControls label={label} >
      <select ref={ref} {...rest}>{children}</select>
    </FormControls> 
  );
});

SelectControl.displayName = 'SelectControl';

export const TextAreaControl = forwardRef((props, ref) => {
  const { label, ...rest } = props;
  verifyValue(rest);
  return(
    <FormControls label={label} >
      <textarea ref={ref} {...rest} ></textarea>
    </FormControls> 
  );
});

TextAreaControl.displayName = 'TextAreaControl';


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




