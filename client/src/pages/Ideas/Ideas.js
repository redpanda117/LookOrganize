import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Nav, SideNav}  from "../../components/Nav";
import Button from "../../components/Button";
import {Modal,ModalHeader,ModalContent,ModalFooter} from "../../components/Modal";

const MyLargeModal = React.createClass({
    render() {
      return (
        <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  });

class Ideas extends Component {
 getInitialState() {
    return { smShow: false, lgShow: false };
  } 
      render() {
        let lgClose = () => this.setState({ lgShow: false });
            return (
            <div>
                <Nav></Nav>
                    <Container fluid>
                        <Row>
                        
                        <Col size="md-3">
                            <SideNav></SideNav>
                        </Col>
                        <Button >+</Button>
                        </Row>
                    </Container>
                <Modal  
                   >
                    <ModalHeader>
                    <h4 class="modal-title">Add an Note</h4>    
                    </ModalHeader>
                    <ModalContent>
                <p>Hello</p> 
                </ModalContent>
                <ModalFooter>
                    <Button data-dismiss="modal">Submit</Button>
                    <Button data-dismiss="modal">Cancal</Button>
                </ModalFooter>
                </Modal>
            </div>
        );
        
      }
      
    }
    
    export default Ideas;