
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import Dungeon from './Dungeon/Dungeon.jsx';
import Lair from './Lair/Lair.jsx';
import Pokedex from './API/Pokedex.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="dungeon" element={<Dungeon />}/>
          <Route path="lair" element={<Lair/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

