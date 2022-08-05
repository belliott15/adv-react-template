import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import styles from './User.css';
import { useAuth } from '../../../state/hooks/userAuth';

export default function User() {
  const { signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const className = classNames(styles.User, {
    [styles.Open]: isOpen,
  });

  function handleClick(e) {
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
    <div className={className}>
      
      <button onClick={handleClick}>
        <div className={styles.avatar}>B</div>
        Beau </button>
      <div className={styles.UserMenu}>
        <Link className="theme-font" to="profile">Profile</Link>
        <Link className="theme-font" to="user" onClick={signOut}>Sign Out</Link>
      </div>
    </div>
  );
}
