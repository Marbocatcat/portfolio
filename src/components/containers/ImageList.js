import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageList extends Component {

  renderImage = () => {
    return (
      this.props.images.map((photo) => {
        return (
          <li key={photo.image}>
            <img src={photo.image} alt="" />
          </li>
        )
      })
    )
  }

  render() {
    return (
        <ul className="_ImageList">
          { this.renderImage() }
        </ul>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
  }
}

export default connect(mapStateToProps)(ImageList);
