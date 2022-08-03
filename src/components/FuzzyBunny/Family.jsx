import styles from './Family.css';
import { useFamilyActions } from '../../state/hooks/fuzzyBunny';
import { useState } from 'react';
import { InputControl } from '../Forms/FormControls';

export default function Family({ family }) {
  const { remove, update } = useFamilyActions();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(family.name);

  const handleDelete = () => remove(family.id);

  function handleDoubleClick(){
    setEditing(true);
  }

  function handleChange({ target }) {
    setName(target.value);
  }

  async function handleEdit(){
    setEditing(false);
    if(name === family.name) return;
    await update({ name, id: family.id });
  }

  function handleKeyUp(e){
    if(e.code === 'Enter') handleEdit();
  }

  return (
    <li className={styles.Family}>
      {editing ? (
        <InputControl 
          name="name"
          value={name}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onBlur={handleEdit}
        />
      ) : (
        <h2 onDoubleClick={handleDoubleClick}>{family.name}</h2>
      )}
      <button onClick={handleDelete}>x</button>
    </li>
  );
}
