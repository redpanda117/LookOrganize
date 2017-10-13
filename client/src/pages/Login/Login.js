import React, { Component } from "react";
//import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Button from "../../components/Button";

class Login extends Component {
    state = {
        users:[],
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

      <Container fluid>
        <Row>
        <h1>Log In</h1>
          <Col size="md-6">
            <h2>Already a user? Log in here:</h2>
            <form>
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
            <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
            >
            <span className="glyphicon glyphicon-log-in"> </span>  Login
            </FormBtn>  
            </form>
          </Col>
          <Col size = "md-1"></Col>
          <Col size ="md-5">
          <h2>New Users:</h2>
          <p>Sign up now to create an account</p>
          <Link to={"/SignUp/" }>
          <Button>Sign up</Button>
          </Link>
          </Col>
        </Row>
      </Container>

      </div>
    );
    
  }
  
}

export default Login;