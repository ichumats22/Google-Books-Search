import React, {Component} from 'react';
import { Col, Row, Container } from "../components/Grid";
import {BookCard, ResultsContainer} from '../components/Results'
import { Card, cardHeader, cardBody, cardTitle} from '../components/Card'

import API from '../utils/API';
import ViewBtn from '../components/ViewBtn';
import DeleteBtn from '../components/DeleteBtn';

class Saved extends Component {
  state = {
    books: [],
    selectedBook: {}
  };

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err))
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
        <Row style='justify-content-center'>
          <Col size='lg-8'>
            <Card>
              <cardHeader>
                <h2 className='text-center'>Saved Books</h2>
              </cardHeader>
              <cardBody>
                {!this.state.books.length ? (<h5 className='text-center'>No Saved Books</h5>) : 
                (<ResultsContainer>
                  {this.state.books.map(book => {
                    console.log(book)
                    return (
                      <BookCard key={book._id}>
                        <cardTitle>
                          <h1 className='card-title'> {book.title} </h1>
                          <h2> By: {book.author}</h2>
                        </cardTitle>
                        <cardBody>
                          <Row>
                            <Col size='md-4'>
                              <img src={book.img} alt={`${book.title} Thumbnail`}></img>
                            </Col>

                            <Col size='md-8'>
                              <ViewBtn href={book.link}> </ViewBtn>
                              <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                              <p className='card-text'>{book.description}</p>
                            </Col>
                          </Row>
                        </cardBody>
                      </BookCard>
                    )
                  })}
                </ResultsContainer>)}
              </cardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Saved;