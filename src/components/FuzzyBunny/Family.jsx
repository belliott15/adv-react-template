import styles from './Family.css';
import { useFamilyActions } from '../../state/hooks/fuzzyBunny';

export default function Family({ family }) {
  const { remove } = useFamilyActions();

  const handleDelete = () => remove(family.id);

  return (
    <li className={styles.Family}>
      <h2>{family.name}</h2>
      <button onClick={handleDelete}>x</button>
    </li>
  );
}
