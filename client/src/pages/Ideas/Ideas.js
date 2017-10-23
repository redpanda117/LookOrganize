import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Nav, SideNav}  from "../../components/Nav";
import Button from "../../components/Button";
import { Input, TextArea} from "../../components/Form";
import { Modal } from 'react-bootstrap';

class Ideas extends Component{
  state = {
    notes:[],
    title:"",
    body:"",
    currentUser:"",
    showModal: false
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    API.getNotes()
      .then(res => {
        if(res.data.statusCode == 401){
          this.props.history.push("/login");
        }
        else {
          console.log("user:", res.data.sess);
          this.setState({currentUser: res.data.sess.passport.user, notes: res.data.results, title: "", body: ""})
        }
      })
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
      API.saveNote({
        title: this.state.title,
        body: this.state.body
      })
        .then(res => this.loadNote())
        .catch(err => console.log(err));
    }
  };

  addNoteClick = (event) => {
    this.handleFormSubmit(event); 
    this.close();
  }

  deleteNote = id => {
    API.deleteNote(id)
      .then(res => this.loadNote())
      .catch(err => console.log(err));
  };

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
            <Row>
            {this.state.notes.length ? (
                <List>
                  {this.state.notes.map(note => (
                    <ListItem key={note._id}>
                      <Link to={"/notes/" + note._id}>
                        <strong>
                          {note.title} by {note.body}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deletenote(note._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Row>
            <Container>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>New Note</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title"
                  />
                  <TextArea
                    value={this.state.body}
                    onChange={this.handleInputChange}
                    name="body"
                    placeholder="Add description"
                  />  
                </form>
              </Modal.Body>
              <Modal.Footer>
                  <Button
                    disabled={!(this.state.title && this.state.body)}
                    onClick={this.addNoteClick}
                  >Add Note
                  </Button>
                  <Button onClick= {this.close}>Cancel</Button>
              </Modal.Footer>
            </Modal>
            </Container>
          </div>
        );
      }
}

    export default Ideas;