import "./App.css";
// from react-router-dom (uses routes below)
import { Routes, Route, NavLink } from 'react-router-dom';
import PokemonDiscoveryPage from './components/PokemonDiscoveryPage';
// importing pokemon detail page
import PokemonDetailPage from "./components/PokemonDetailPage";


function App() {
  return (
    <div className="App">
      <h1>Pokemon Discovery!</h1>
      <div className="AppNav">
        <NavLink className="NavElement" end to="/">
          Home
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<PokemonDiscoveryPage />}>
          {/* filtering pokemon based on letters typed */}
          <Route path=":filter" element={<PokemonDiscoveryPage />}/>
        </Route>
        {/* calling details page */}
        <Route path="/details/:pokemon_name" element={<PokemonDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;