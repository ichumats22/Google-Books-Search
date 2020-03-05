import React from "react";
import './results.css'

export function ResultsList({ children }) {
  return <ul className='list-group'>{children}</ul>
}

export function ResultsListItem ({
  title, author, description, img, link
}) {
  return (
    <li className='list-group-item'>
       <div className='row'>
          <div className='col'>
            <h3>{title}</h3>
          </div>

          <div className='col-md-3'>
            <a className='btn btn-outline-secondary' rel="noopener noreferrer" target='_blank' href={link}>
              View
            </a>
            <a className='btn btn-outline-secondary' href='tbd' >
              Save
            </a>
          </div>
          
        </div>

        <div className='row'>
          <div className='col'>
            <h5>Written By: {author}</h5>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <img src={img} alt={`${title} Thumbnail`}></img>
          </div>
          <div className='col'>
            <p>{description}</p>
          </div>
        </div>

        <div className='row'>
          
        </div>
    </li>
  );
}