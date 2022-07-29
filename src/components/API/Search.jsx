import  { 
  InputControl, 
  FormButton, 
  SelectControl 
} from '../Forms/FormControls';
import { useShapes } from '../../state/hooks/Pokedex';
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
        label="Shape (count)"
        name="shape"
      >
        {shapes.map(({ shape, count }) => 
          <option key={shape + count} value={shape}>
            {`${shape} (${count})`}</option>)}
      </SelectControl>


      <FormButton>
        <div className={styles.pokeball}></div>Catch
      </FormButton>
    </form>
  );
}
