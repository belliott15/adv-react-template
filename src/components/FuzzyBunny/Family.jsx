import styles from './Family.css';

export default function Family({ family }) {
//   const [name, setName] = useState(family.name);


  return (
    <li className={styles.Family}>
      <h2>{family.name}</h2>
      <button>x</button>
    </li>
  );
}
