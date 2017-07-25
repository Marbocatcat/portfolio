import React from 'react';

import ImageList from '../containers/ImageList';
import HoverList from '../containers/HoverList';

const SelectedWorks = () => {
  return (
    <div className="_Box _SelectedWorks">
      <h1>Works</h1>
      <ImageList />
      <HoverList />
    </div>
  )
}

export default SelectedWorks;
