import React from 'react';
import Modal from './Modal';

const Headline = () => {
  return (
    <div className="_Headline">
      <ul className="_Header">
        <li>
          <a href="/">Mar Bocatcat</a>
        </li>
        <li>
          <Modal />
        </li>
      </ul>
    </div>
  )
}

export default Headline;
