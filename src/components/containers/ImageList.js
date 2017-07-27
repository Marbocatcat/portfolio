import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageList extends Component {

  renderImage = () => {
    return (
      this.props.images.map((photo) => {
        return (
            <li>
              <div className="_Card" style={ photo.image }>
                <div className="_onHover" >
                  <h1>{ photo.title }</h1>
                  <p>{ photo.description }</p>
                </div>
              </div>
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
