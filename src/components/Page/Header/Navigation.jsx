import { Link } from 'react-router-dom';
import styles from './Navigation.css';


export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="dungeon">Dungeon</NavLink>
      <NavLink to="lair">Lair</NavLink>
    </nav>
  );
}

//very interesting way to assign multiple items the 
//same classname without having to repeat it frequently
// eslint-disable-next-line react/prop-types
function NavLink({ children, ...rest }){
  return(
    <Link className="theme-font" {...rest}>
      {children}
    </Link>);
}
