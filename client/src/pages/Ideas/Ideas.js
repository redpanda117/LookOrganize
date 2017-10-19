import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Nav, SideNav}  from "../../components/Nav";
import Button from "../../components/Button";
import { Modal } from 'react-bootstrap';

const Ideas = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {

    return (
      <div>
        <Nav></Nav>
        <Row>
          <Col size = "md-3">
            <SideNav></SideNav>
          </Col>
          <Button onClick={this.open}>
              +
          </Button>
        </Row>

        <Container>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>New Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Container>
      </div>
    );
  }
});
    
    export default Ideas;