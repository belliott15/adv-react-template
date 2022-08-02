import { Outlet } from 'react-router-dom';
import styles from './FuzzyBunny.css';

export default function FuzzyBunny() {
  return (
    <section className={styles.FuzzyBunny}>
      
      <Outlet />
    </section>
  );
}
