import React from 'react';

import Headline from '../blocks/Headline';
import Information from '../blocks/Information';
import SelectedWorks from '../blocks/SelectedWorks';
import Footer from '../blocks/Footer';

const FrontPage = () => {
  return (
    <div>
      <Headline>Mar Bocatcat</Headline>
      <Information />
      <SelectedWorks />
      <Footer />
    </div>


  )
};

export default FrontPage;
