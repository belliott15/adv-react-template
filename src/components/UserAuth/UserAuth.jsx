import Auth from './Auth';
import Profile from './Profile';
import useStatus from '../../state/hooks/userAuth';
import { Navigate } from 'react-router-dom';
import styles from './UserAuth.css';

export default function UserAuth() {
  const { user, profile } = useStatus();

  if (user && profile) return <Navigate to="/" />;

  return (
    <section className={styles.UserAuth}>
      {user ? <Profile /> : <Auth />}
    </section>
  );
}
