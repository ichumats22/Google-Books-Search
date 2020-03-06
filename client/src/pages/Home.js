import React, {Component} from 'react';
import Jumbotron from '../components/Jumbotron'
import BookSearch from '../components/BookSearch'
import {ResultsList, ResultsListItem} from '../components/Results'
import API from '../utils/API';

class Home extends Component {
  state = {
    books: [],
    bookSearch: ''
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

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Jumbotron />
          </div>
        </div>
        <div className='row border border-secondary'>
          <div className='col'>
            <BookSearch value={this.state.bookSearch} onChange={this.handleInputChange} onClick={this.handleFormSubmit} >
            </BookSearch>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            {!this.state.books.length ? 
            (<h1 className='text-center'>No Books to Display</h1>) : 
            (<ResultsList>
              {this.state.books.map(book => {
                let img = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'
                let author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : book.volumeInfo.authors
                return (
                  <ResultsListItem
                    key={book.volumeInfo.title}
                    title={book.volumeInfo.title}
                    author={author}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.canonicalVolumeLink}
                    img={img}
                  />
                );
              })}
            </ResultsList>
            )}
          </div>
        </div>

      </div> 
    )
  }
}

export default Home;