import React from 'react';
import Modal from './Modal';

const Headline = ({ children }) => {
  return (
    <div className="_Headline">
      <ul className="_Header">
        <li>
          <a href="/">{ children }</a>
        </li>
        <li>
          <Modal />
        </li>
      </ul>
    </div>
  )
}

export default Headline;
