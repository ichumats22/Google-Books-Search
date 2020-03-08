import React from "react";
import {Row, Col} from '../Grid';
import './results.css'

export function ResultsContainer({ children, style }) {
  return <div className={`card-group${style ?   ` ${style}` : ""}`}>{children} </div>
}

export function BookCard ({ children }) {
  return(
    <Row>
      <Col size='12'>
        <div className='card' id='bookCard'>
          <div className='card-body'>
            {children}
          </div>
        </div>
      </Col>
    </Row>
  )
}