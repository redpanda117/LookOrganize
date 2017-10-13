import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
//import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Nav }  from "../../components/Nav";

class Home extends Component {

  render() {
    return (
      <div>
        <Nav></Nav>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Look Organize</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      </div>
    );
    
  }
  
}

export default Home;
