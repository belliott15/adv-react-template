import FamilyList from './FamilyList.jsx';
import styles from './Families.css';
import AddFamily from './AddFamily.jsx';

export default function Families() {
  return (
    <section className={styles.FamilyList}>
      <AddFamily />
      <FamilyList />
    </section>
  );
}
