import React, { Component } from 'react';
import { connect } from 'react-redux';

class BlogList extends Component {

  renderBlogs = () => {
    return (
      this.props.Blogs.map((blog) => {
        return (
          <article>
            <h1>{ blog.title }</h1>
            <h5>{ blog.date }</h5>
            <img className="_BlogImage" src={blog.image} alt=""/>
            <p>{ blog.blog }</p>
          </article>
        )
      })
    )
  }
  render() {
    return (
      <div className="_Box _Blog">
        { this.renderBlogs() }
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    Blogs: state.blogs,
  };
}

export default connect(mapStateToProps)(BlogList);
