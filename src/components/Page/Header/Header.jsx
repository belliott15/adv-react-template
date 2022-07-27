import Menu from './Menu';
import Navigation from './Navigation';
import styles from './Header.css';
import User from './User';


export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <Menu />
      </div>

      <div>
        App Name
      </div>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>

      <User />
    </header>
  );
}
