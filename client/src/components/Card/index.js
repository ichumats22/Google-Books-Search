import React from "react";
import {Row, Col} from '../Grid';
import './card.css'

export function Card ({ children }) {
  return (
    <Row>
      <Col size='12'>
        <div className='card'>
          {children}
        </div>
      </Col>
    </Row>
  )
}

export function cardHeader ({ children }) {
  return <div className='card-body'>{children}</div>
}

export function cardTitle ({ children }) {
  return <h5 className='card-title'>{children}</h5>
}

export function cardBody ({ children }) {
  return <div className='card-body'>{children}</div>
}