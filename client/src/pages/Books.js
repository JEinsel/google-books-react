import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { API } from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios"


class Books extends Component {
  state = {
    books: [],
    search: "",
    result: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };
  onChangeHandler = (event) => {

    console.log(event.target.value)
    this.setState({ search: event.target.value })
  }


  submitHandler = event => {
    // let results = API.getGoogleBooks(this.state.search);
    // console.log(results)
    console.log(API.getGoogleBooks)
    console.log(axios)

    // axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.search)
    API.getGoogleBooks(this.state.search)
      .then(res => {
        console.log(res, "Line 35")
        if (res.data.items === "error") {
         console.log(res.data.items)
        }
        else {
          let results = res.data.items
          results = results.map(result => {
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              author: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              // image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            }
            return result

          })

        }
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2">

          </Col>
          <Col size="md-8">
            <Jumbotron>
              <h1>Search for a book!</h1>
            </Jumbotron>
            <form>
              <Input onChange={(event) => this.onChangeHandler(event)} name="title" placeholder="Title (required)" />
              {/* <Input name="author" placeholder="Author (required)" /> */}
              {/* <TextArea name="synopsis" placeholder="Synopsis (Optional)" /> */}
              <FormBtn submitHandler={() => this.submitHandler()}>Submit Book</FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col> */}
        </Row>
      </Container >
    );
  }
}
// .then(res => console.log(res))
// .catch(err => console.log(err));





// onChangeHandler = (event) => {

//   console.log(event.target.value)
//   this.setState({ search: event.target.value })
// }

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input onChange={(event) => this.onChangeHandler(event)} name="title" placeholder="Title (required)" />
//               {/* <Input name="author" placeholder="Author (required)" /> */}
//               {/* <TextArea name="synopsis" placeholder="Synopsis (Optional)" /> */}
//               <FormBtn submitHandler={this.submitHandler}>Submit Book</FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {this.state.books.length ? (
//               <List>
//                 {this.state.books.map(book => (
//                   <ListItem key={book._id}>
//                     <a href={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </a>
//                     <DeleteBtn />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//                 <h3>No Results to Display</h3>
//               )}
//           </Col>
//         </Row>
//       </Container >
//     );
//   }
// }

export default Books