import  { 
  InputControl, 
  FormButton, 
  SelectControl 
} from '../Forms/FormControls';
import { useShapes } from '../../state/hooks/Pokedex';
import styles from './Search.css';
import useSearch from '../../state/hooks/url';
import { useEffect, useState } from 'react';

export default function Search() {
  const { shapes } = useShapes();
  const { params, setParameters } = useSearch();
  const [formData, setFormData] = useState({});
  const { pokemon, shape } = params;

  useEffect(() => {
    setFormData({ pokemon, shape });
  }, [pokemon, shape]);

  function handleSubmit(e){
    // e.preventDefault();
    setParameters(formData);
  }

  function handleChange({ target: { name, value } }){
    setFormData((formData) => ({ formData, [name]: value }));
  }

  return (
    <form className={styles.Search} onSubmit={handleSubmit}>
      <InputControl 
        label="Pokemon"
        name="pokemon"
        value={formData.pokemon}
        // onChange={handleChange}
      />

      <SelectControl
        label="Shape (count)"
        name="shape"
        value={formData.shape}
        // onChange={handleChange}
      >
        {/* <option value={''}>All Shapes</option> */}
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
