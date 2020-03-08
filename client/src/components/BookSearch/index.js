import React from 'react';
import './bookSearch.css'

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function BookSearch({value, onChange, onClick, id}) {
  return (
    <div className='input-group input-group-lg border-secondary' id={id}>
      <input type='text' className='form-control' aria-label='search input' aria-describedby='button-addon2' name='bookSearch' value={value} onChange={onChange}/>
      <div className='input-group-append'>
        <button className='btn' type='button' id='button-addon2' onClick={onClick}>Search</button>
      </div>
    </div>
  );
}

export default BookSearch;