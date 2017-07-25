import React from 'react';

import Headline from '../blocks/Headline';
import Footer from '../blocks/Footer';
import BlogList from '../containers/BlogList';

const BlogPage = () => {
  return (
    <div>
      <Headline />
        <BlogList />
      <Footer />
    </div>
  )
};

export default BlogPage;
