import axios from "axios";

export const API = {
  getGoogleBooks: function (search) {
    console.log("line 5 ", search)
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=")



    //  axios({
    //   method: `get`,
    //   url: `https://www.googleapis.com/books/v1/volumes?q=${search}`,
    // })
    //   .then(function (response) {
    //    console.log(response, "Line 15")
    //   });
    // Gets all books
  },
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};

