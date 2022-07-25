
import {
  Routes,
  Route,
  Router,
  Navigate,
} from 'react-router-dom';
import Layout from 
import Home from './Home';
import Dungeon from './Dungeon';
import Lair from './Lair';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="dungeon" element={<Dungeon />}/>
          <Route path="lair" element={<Lair/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

