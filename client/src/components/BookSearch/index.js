import React from "react";
import './bookSearch.css'

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function BookSearch({value, onChange, onClick, id}) {
  return (
    <div className="input-group input-group-lg" id={id}>
      <div className='row'>
        <div className='col'>
          <h4>Book Search</h4>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <p>Book</p>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <input type="text" className="form-control" aria-label="search input" aria-describedby="button-addon2" name='bookSearch' value={value} onChange={onChange}/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={onClick}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSearch;