import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Favourites from './pages/favourites';
import Navbar from './components/NavBar';

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Favourites />} />
      </Routes>
  </Router>
  );
}

export default App;
