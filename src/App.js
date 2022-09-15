import React from 'react';
import {
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Home from './Home';
import Identity from './Identity';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/identity">identity</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/identity" element={ <Identity /> } />
      </Routes>
    </div>
  );
}

export default App;
