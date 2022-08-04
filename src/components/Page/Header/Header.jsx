import Menu from './Menu';
import Navigation from './Navigation';
import styles from './Header.css';
import User from './User';


export default function Header() {

  const allPages = [
    { to: '/', label: 'Home' }, 
    { to: 'pokedex', label: 'Pokedex' }, 
    { to: 'lair', label: 'Lair' },
    { to: 'fuzzy-bunny', label: 'Fuzzy Bunnies' }
  ];
  
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <Menu navigation={allPages} />
      </div>

      <div>
        App Name
      </div>

      <div className={styles.NavigationContainer}>
        <Navigation navigation={allPages} />
      </div>

      <User />
    </header>
  );
}
