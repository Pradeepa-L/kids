import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component,Sonnet } from 'react';
import { Navbar,Nav,Col,Tab,Row} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
        <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo_ellipse.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Adventurs kids</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
      </Navbar>
      <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={2}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={3}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
         
        </Tab.Pane>
        <Tab.Pane eventKey="second">
         
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
      </div>
    </div>
  );
}

export default App;
