import React, {Component} from 'react';
import { Col, Row, Container } from "../components/Grid";
import BookSearch from '../components/BookSearch'
import {BookCard, ResultsContainer} from '../components/Results'
import SaveBtn from '../components/SaveBtn'
import {cardContainer, Card, cardHeader, cardTitle, cardBody} from '../components/Card'

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
      <div>
        <Container fluid>
          <Row style='justify-content-center'>
            <Col size='lg-8'>
              <Card>
                <cardHeader><h5>Book Search</h5></cardHeader>
                <cardTitle>Book</cardTitle>
                <cardBody>
                  <BookSearch value={this.state.bookSearch} onChange={this.handleInputChange} onClick={this.handleFormSubmit} id='book-search' />
                </cardBody>
              </Card>
            </Col>
          </Row>

          <Row style='justify-content-center'>
            <Col size='lg-8'>
            {!this.state.books.length ? 
              (<Card>
                <cardHeader>
                  <h2 className='text-center'>Search a book or author</h2>
                </cardHeader>
              </Card>) : 
              (<Card>
                <cardHeader>
                  <h2 className='text-center'>Search Results</h2>
                </cardHeader>
                <cardBody>
                  {this.state.books.map(book => {
                    let title = book.volumeInfo.title
                    let author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : book.volumeInfo.authors
                    let img = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'
                    let description = book.volumeInfo.description
                    let link = book.volumeInfo.canonicalVolumeLink
                  
                    return (
                      <BookCard key={title}>
                        <cardTitle>
                          <h3>{title}</h3>
                          <h4> By: {author}</h4>
                        </cardTitle>
                        <cardBody>
                          <Row>
                            <Col size='md-4'>
                              <img src={img} alt={`${title} Thumbnail`}></img>
                            </Col>
                            <Col size='md-8'>
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
                              <p className='card-text'>{description}</p>
                            </Col>
                          </Row>
                        </cardBody>
                      </BookCard>
                    )
                  })}
                  </cardBody>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      
      
    )
  }
}

export default Home;