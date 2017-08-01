import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitBlog } from '../actions/index';

import Headline from '../blocks/Headline';

class BlogSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Title",
      textarea: "Story",
      title: "TITLE",
      form: "FORM",
    }
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent default to stop it from refreshing

    const titleValue = this.titleInput.value;
    const blogValue = this.blogInput.value;
    const blogData = {
      title: titleValue,
      blog: blogValue,
    };

    this.props.submitBlog(blogData);
  }


  render() {
    return (
      <div>
        <Headline>Draft</Headline>
        <form onSubmit={ (e) => this.handleSubmit(e) } >
          <div className="_BlogForm">
            <input type="text" placeholder={this.state.placeholder} ref={(title) => { this.titleInput = title }}/>
          </div>
          <div className="_BlogForm">
            <textarea name="" id="" cols="40" rows="10" placeholder={this.state.textarea} ref={(blog) => { this.blogInput = blog }}></textarea>
          </div>
          <div className="_SubmitButton">
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ submitBlog}, dispatch);
}

// First argument is always null, second is always the dispatch mapping
export default connect(null, mapDispatchToProps)(BlogSubmit);
