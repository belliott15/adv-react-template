import Navigation from './Navigation';
import classNames from 'classnames';
import { useState } from 'react';
import styles from './Menu.css';


export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const className = classNames(styles.Menu, {
    [styles.Open]: isOpen,
  });

  function handleClick(){
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <button onClick={handleClick} className={className}>
      <div className={styles.MenuContainer}>
        <Navigation />
      </div>
    </button>
  );
}
