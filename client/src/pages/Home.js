import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from '../components/Jumbotron'
import BookSearch from '../components/BookSearch'
import {BookCard, ResultsContainer} from '../components/Results'
import SaveBtn from '../components/SaveBtn'

import API from '../utils/API';
import ViewBtn from '../components/ViewBtn';

class Home extends Component {
  state = {
    books: [],
    bookSearch: '',
    selectedBook: {}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data.items}))
      .catch(err => console.log(err));
  };

  handleBookSave = book => {
    console.log(book)
    API.saveBook(book)
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='12'>
            <Jumbotron fluid> 
              <h1>(React) Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>  
            </Jumbotron>
          </Col>
        </Row>

        <Row style='justify-content-center'>
          <Col size='lg-8'>
            <BookSearch value={this.state.bookSearch} onChange={this.handleInputChange} onClick={this.handleFormSubmit} id='book-search' />
          </Col>
        </Row>

        <Row style='justify-content-center'>
          <Col size='lg-8'>
            {!this.state.books.length ? (<h1 className='text-center'>Search a book or author!</h1>) : 
            (<ResultsContainer>
              {this.state.books.map(book => {
                let title = book.volumeInfo.title
                let author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : book.volumeInfo.authors
                let img = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'
                let description = book.volumeInfo.description
                let link = book.volumeInfo.canonicalVolumeLink
              
                return (
                  <BookCard key={title}>
                    
                    <Row>
                      <Col size='lg-10'>
                        <h1 className='card-title'> {title} </h1>
                        <h2> By: {author}</h2>
                      </Col>

                      <Col size='lg-2'>
                        <ViewBtn href={link}> </ViewBtn>

                        <SaveBtn onClick={() => this.handleBookSave( 
                         {
                          title: title,
                          author: author,
                          description: description,
                          link: link,
                          img: img
                          }
                        )}>
                        </SaveBtn>
                      </Col>
                    </Row>
                    <Row>
                      <Col size='md-2'>
                        <img src={img} alt={`${title} Thumbnail`}></img>
                      </Col>

                      <Col size='md-10'>
                        <p className='card-text'>{description}</p>
                      </Col>
                    </Row>
                  </BookCard>
                )
              })}
            </ResultsContainer>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home;