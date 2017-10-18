import axios from "axios";

export default {
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
  saveNote: function(NoteData) {
    return axios.post("/api/note", NoteData);
  },
  login: function(userData) {
    return axios.post("/api/auth/login", userData);
  },
  logout: function() {
    return axios.get("/api/auth/logout");
  },
  register: function(userData) {
    return axios.post("/api/auth/register", userData);
  },
};