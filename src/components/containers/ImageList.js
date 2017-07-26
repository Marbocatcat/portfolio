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
                  <h4>{ photo.description }</h4>
                  <h5>{ photo.date }</h5>
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
