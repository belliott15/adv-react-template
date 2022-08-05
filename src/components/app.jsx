
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import Lair from './Lair/Lair.jsx';
import Pokedex from './API/Pokedex.jsx';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny.jsx';
import Families from './FuzzyBunny/Families.jsx';
import FuzzyBunnyProvider from '../state/context/FuzzyBunnyContext.jsx';
import { UserProvider } from '../state/context/userContext.jsx';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <FuzzyBunnyProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="pokedex" element={<Pokedex />} />
              <Route path="fuzzy-bunny" element={<FuzzyBunny />}>
                <Route index element={<Families />} />
              </Route>
              <Route path="lair" element={<Lair/>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </FuzzyBunnyProvider>
      </UserProvider>
    </Router>
  );
}

