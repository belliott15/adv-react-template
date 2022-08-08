import Navigation from './Navigation';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './Menu.css';


export default function Menu({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);

  const className = classNames(styles.Menu, {
    [styles.Open]: isOpen,
  });

  function handleClick(e){
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  }

  useEffect(() => {
    if (!isOpen) return;

    const clickHandler = () => setIsOpen(false);
    document.addEventListener('click', clickHandler);

    const escapeHandler = (e) => {
      if(e.key !== 'Escape') return;
      clickHandler();
    };
    document.addEventListener('keydown', escapeHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('keydown', escapeHandler);
    };
  }, [isOpen]);

  return (
    <button onClick={handleClick} className={className}>
      <div className={styles.MenuContainer}>
        <Navigation navigation={navigation} />
      </div>
    </button>
  );
}
