
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Routing from './Routing.jsx';
import FuzzyBunnyProvider from '../state/context/FuzzyBunnyContext.jsx';
import { UserProvider } from '../state/context/UserContext.jsx';


export default function App() {
  return ( 
    <UserProvider>
      <FuzzyBunnyProvider>
        <Router>
          <Routing />
        </Router>
      </FuzzyBunnyProvider>
    </UserProvider>
  );
}

