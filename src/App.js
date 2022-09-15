import React from 'react';
import {
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Home from './Home';
import Identity from './Identity';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <Container>
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} to="/">home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/identity">identity</Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/identity" element={ <Identity /> } />
      </Routes>
    </Container>
  );
}

export default App;
