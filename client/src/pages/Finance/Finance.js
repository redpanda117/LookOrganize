import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Nav, SideNav}  from "../../components/Nav";
import Button from "../../components/Button";
import { Input, TextArea} from "../../components/Form";
import { Modal } from 'react-bootstrap';

class Finance extends Component{
  state = {
    finance:[],
    title:"",
    body:"",
    showModal: false
  };

  componentDidMount() {
    this.loadFinance();
  }

  loadFinance = () => {
    API.getFinance()
      .then(res =>
        this.setState({ finance: res.data, title: "", body: ""})
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  open = () => {
    this.setState({ showModal: true });
  }; 
  
  close = () => {
    this.setState({ showModal: false });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title || this.state.body) {
      API.saveFinance({
        title: this.state.title,
        body: this.state.body
      })
        .then(res => this.loadFinance())
        .catch(err => console.log(err));
    }
  };

  addCostClick = (event) => {
    this.handleFormSubmit(event); 
    this.close();
  }

  render() {
    
        return (
          <div>
            <Nav></Nav>
            <Row>
              <Col size = "md-3">
                <SideNav></SideNav>
              </Col>
            <Container>
            </Container>
            </Row>
          </div>
        );
      }
}

    export default Finance;