import React from "react";
import {Row, Col} from '../Grid';
import './results.css'

export function ResultsContainer({ children }) {
  return <div className='card-group'>{children} </div>
}

export function BookCard ({ children }) {
  return(
    <Row>
      <Col size='12'>
        <div className='card'>
          <div className='card-body'>
            {children}
          </div>
        </div>
      </Col>
    </Row>
  )
}