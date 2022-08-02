import { Outlet } from 'react-router-dom';
import styles from './FuzzyBunny.css';

export default function FuzzyBunny() {
  return (
    <section className={styles.FuzzyBunny}>
      <h2>here are some families</h2>
      <Outlet />
    </section>
  );
}
