import  { InputControl, FormButton, SelectControl } from '../Forms/FormControls';
import styles from './Search.css';

export default function Search() {
    const { shapes } = useShapes();
  return (
    <form className={styles.Search}>
      <InputControl 
        label="Pokemon"
        name="pokemon"
      />

      <SelectControl
        label="Shape"
        name="shape"
      />
      <FormButton>
        <div className={styles.pokeball}></div>Catch 'em'
      </FormButton>
    </form>
  );
}
