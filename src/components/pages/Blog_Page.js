import React from 'react';
import { Link } from 'react-router-dom';

import Headline from '../blocks/Headline';
import Footer from '../blocks/Footer';
import BlogList from '../containers/BlogList';

const BlogPage = () => {
  return (
    <div>
      <Headline>Blog</Headline>
        <BlogList />
      <Footer />
    </div>
  )
};

export default BlogPage;
