import { Link } from 'react-router-dom';


export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="dungeon">Dungeon</Link>
      <Link to="lair">Lair</Link>
    </nav>
  );
}
