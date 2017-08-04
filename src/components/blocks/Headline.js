import React from 'react';
import { Link } from 'react-router-dom';


const Headline = ({ children }) => {
  return (
    <div className="_Headline">
      <ul className="_Header">
        <Link to="/"><li>{ children }</li></Link>
        <li className="_Nav">
          <Link to="/Blog"><li>Blog</li></Link>
          <Link to="/Gallery"><li>Gallery</li></Link>
        </li>
      </ul>
    </div>
  )
}

export default Headline;
