import axios from "axios";

export default {
  login: function(userData) {
    return axios.post("/api/auth/login", userData);
  },
  logout: function() {
    return axios.get("/api/auth/logout");
  },
  register: function(userData) {
    return axios.post("/api/auth/register", userData);
  },
  getEvents: function() {
    return axios.get("/api/event");
  },
  getEvent: function(id) {
    return axios.get("/api/event/" + id);
  },
  deleteEvent: function(id) {
    return axios.delete("/api/event/" + id);
  },
  saveEvent: function(eventData) {
    return axios.post("/api/event", eventData);
  },
  // Gets all note
  getNotes: function() {
    return axios.get("/api/note");
  },
  // Gets the Note with the given id
  getNote: function(id) {
    return axios.get("/api/note/" + id);
  },
  // Deletes the Note with the given id
  deleteNote: function(id) {
    return axios.delete("/api/note/" + id);
  },
  // Saves a Note to the database
  saveNote: function(noteData) {
    return axios.post("/api/note", noteData);
  },
    
    getFinances: function() {
      return axios.get("/api/finance");
    },
   
    getFinance: function(id) {
      return axios.get("/api/finance/" + id);
    },
  
    deleteFinance: function(id) {
      return axios.delete("/api/finance/" + id);
    },
    
    saveFinance: function(financeData) {
      return axios.post("/api/finance", financeData);
    }

};