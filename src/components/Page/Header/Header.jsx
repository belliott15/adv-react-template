import Menu from './Menu';
import Navigation from './Navigation';


export default function Header() {
  return (
    <header>
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
