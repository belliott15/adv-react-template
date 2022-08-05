import { Routes as Routee, Route, Navigate } from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import Lair from './Lair/Lair.jsx';
import Pokedex from './API/Pokedex.jsx';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny.jsx';
import Families from './FuzzyBunny/Families.jsx';
import UserAuth from './UserAuth/UserAuth.jsx';
import ProtectedRoutes from './UserAuth/ProtectedRoutes';

export default function Routing() {
  return (
    <Routee>
      <Route path="user/*" element={<UserAuth/>}/>
      <Route path="/" element={<Layout />}>
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />}/>
          <Route path="fuzzy-bunny" element={<FuzzyBunny/>}>
            <Route index element={<Families />}/>
          </Route>
          <Route path="lair" element={<Lair/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Route>
    </Routee>
  );
}
