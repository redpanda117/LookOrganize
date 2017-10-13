import React, { Component } from "react";
//import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { Nav }  from "../../components/Nav";


class SignUp extends Component {
    state = {
        users:[],
        name:"",
        email:"",
        password:""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    
  render() {
    return (
        <div>
          <Nav></Nav>
            <Container fluid>   
                <Row>
                <Col size="md-3">
                </Col>
                <Col size="md-5">
                    <h2>Create an Account</h2>
                    <p>Create an account and you are on your way to looking more organize.</p>
                    <form>
                        <Input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="Name (required)"
                        />
                        <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="Email (required)"
                        />
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Password (required)"
                        />
                        <Link to={"/SignUp/" }>
                        <FormBtn
                            disabled={!(this.state.email && this.state.password && this.state.name)}
                            onClick={this.handleFormSubmit}
                        >
                        <span className="glyphicon glyphicon-user"></span>  Lets Get Started
                        </FormBtn>  
                        </Link>
                    </form>
                </Col>
                </Row>
            </Container>

        </div>
    );
    
  }
  
}

export default SignUp;