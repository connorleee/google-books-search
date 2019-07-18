import axios from "axios";

export default {
  // Gets all books
  getBooks: function(search) {
    console.log(process.env)

    return axios.get(`https://www.googleapis.com/books/v1/volumes?key=${process.env.REACT_APP_API_KEY}&q=${search}+intitle`);
  }
};
