import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false}
  };

  handleOpenModal = () => {
    this.setState({showModal: true});
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <div className="_Modal">
        <i onClick={this.handleOpenModal} className="fa fa-bars fa-lg" aria-hidden="true"></i>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            >
            <i onClick={this.handleCloseModal} className="fa fa-bars fa-lg" aria-hidden="true"></i>
            <ul className="_ModalList">
              <Link to="/"><li>Home</li></Link>
              <Link to="/Blog"><li>Blog</li></Link>
              <Link to="/Gallery"><li>Gallery</li></Link>
              <Link to="/Log In"><li>Log In</li></Link>
            </ul>

          </ReactModal>
      </div>
    );
  }
}
