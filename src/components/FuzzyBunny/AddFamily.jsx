import { useState } from 'react';
import { useFamilyActions } from '../../state/hooks/fuzzyBunny';
import { InputControl, FormButton } from '../Forms/FormControls';
import styles from './AddFamily.css';

export default function AddFamily() {
  const { add } = useFamilyActions();
  const [name, setName] = useState();

  const handleChange = ({ target }) => setName(target.value);

  async function handleSubmit(e){
    e.preventDefault();
    await add({ name });
    setName('');
  }

  return (
    <form className={styles.AddFamily} onSubmit={handleSubmit}>
      <InputControl 
        label="add a family"
        name="family"
        value={name}
        onChange={handleChange}
      />
      <FormButton>
        +
      </FormButton>
    </form>
  );
}
