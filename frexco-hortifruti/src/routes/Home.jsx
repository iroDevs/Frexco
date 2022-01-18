import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Menu from '../components/Menu';

import './css/style.css';

export default function home() {
  return (
    <Container fluid>
      <Row>
        <Col />
        <Menu />
      </Row>
    </Container>
  );
}
