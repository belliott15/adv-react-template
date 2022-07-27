import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';
import styles from './User.css';

export default function User() {
  const [isOpen, setIsOpen] = useState();

  const className = classNames(styles.User, {
    [styles.Open]: isOpen,
  });

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={className}>
        User
      <button onClick={handleClick}>^</button>
      <div>
        <Link to="lair">Profile</Link>
        <Link to="lair">Sign Out</Link>
      </div>
    </div>
  );
}
