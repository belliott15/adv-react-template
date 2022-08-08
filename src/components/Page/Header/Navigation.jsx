import { Link } from 'react-router-dom';
import styles from './Navigation.css';


export default function Navigation({ navigation }) {
  return (
    <nav className={styles.Navigation}>
      {navigation.map(({ to, label }) => (
        <NavLink key={to + label} to={to}>{label}</NavLink>
      ))}
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
