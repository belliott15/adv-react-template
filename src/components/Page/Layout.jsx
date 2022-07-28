import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import './reset.css';
import styles from './Layout.css';
import './global.css';

export default function Layout() {
  return (
    <>
      <div className={styles.Layout}>
        <Header />
        <main>
          <Outlet />
        </main> 
      </div>
    </>
    
  );
}
