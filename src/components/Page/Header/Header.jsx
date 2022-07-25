import Menu from './Menu';
import Navigation from './Navigation';
import styles from './Header.css';


export default function Header() {
  return (
    <header className={styles.Header}>
      <div>
        <Menu />
      </div>

      <div>
        App Name
      </div>

      <div>
        <Navigation />
      </div>
    </header>
  );
}
