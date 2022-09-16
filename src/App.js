import React from 'react';
import {
  Link,
  Navigate,
  Route,
  Routes
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
          <Nav.Link as={Link} to="/us">universal basic income</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/id">identity and verification</Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="/" element={<Navigate to="/us" replace />} />
        <Route path="/us" element={ <Home /> } />
        <Route path="/id" element={ <Identity /> } />
      </Routes>
    </Container>
  );
}

export default App;
