import axios from "axios";

export default {
  // Gets all books
  getBooks: function(search) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?key=AIzaSyAt2nlTypeZduYOS-PBEJnKrUWdQsgiXHo&q=${search}+intitle`);
  }
};
