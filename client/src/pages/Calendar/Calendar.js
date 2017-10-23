import React, { Component } from "react";
//import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { Nav, SideNav}  from "../../components/Nav";
import BigCalendar from 'react-big-calendar';


//let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class MyCalendar extends Component {
    
render(){
    return(
        <div>
        <Nav></Nav>
        <Row>
          <Col size = "md-3">
            <SideNav></SideNav>
          </Col>
        </Row>
        </div>
)}




}





export default MyCalendar;