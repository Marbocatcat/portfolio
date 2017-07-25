import React, { Component } from 'react';
import { connect } from 'react-redux';

class HoverList extends Component {

  renderHoverList = () => {
    return (
        this.props.images.map((image) => {
          return (
          <li>
            <div className="_HoverBox">
              <h4>{image.description}</h4>
              <h5>{image.date}</h5>
            </div>
          </li>
          )
      })
    )
  }

  render() {
    return (
      <ul className="_HoverOn">
        { this.renderHoverList() }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
  }
}

export default connect(mapStateToProps)(HoverList);
