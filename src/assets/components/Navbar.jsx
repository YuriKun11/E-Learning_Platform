import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand className="logo navbar-brand text-center d-flex align-items-center justify-content-center" style={{ height: '8rem', padding: '5px' }}>
          <h4>{`{E}`} Learning Platform</h4>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <h4>@YuriKun11</h4>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
