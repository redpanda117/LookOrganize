import React, { Component } from "react";
import API from "../../utils/API";
import moment from 'moment';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { Nav, SideNav}  from "../../components/Nav";
import MyCalendar from "../../components/MyCalendar";


class MySchedule extends Component {
  
//checking if the date click on is the same
    slotSelected = (slotInfo) => {
      console.log(slotInfo)
    }
  
    
render(){
    return(
        <div>
        <Nav></Nav>
        <Row>
          <Col size = "md-3">
            <SideNav></SideNav>
          </Col>
          <Col size = "md-8">
              <MyCalendar slotSelected = {this.slotSelected}></MyCalendar>
          </Col>
        </Row>

        </div>
)}




}





export default MySchedule;