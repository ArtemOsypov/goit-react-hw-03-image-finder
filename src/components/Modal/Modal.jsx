import React, {Components} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalViewer, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Components {
    componentDidMounet() {
        window.addEventListener('keydown', this.closeByEsc);
    };

    componentsWillUnmount() {
        window.removeEventListener('keydown', this.closeByEsc);
    }

    cloesByEsc = e => {
        if (e.code !== 'Escape') {
        return;
        }
    this.props.closeModal(); 
    }
    

    render() {
    const { closeModal, tags, modalImg } = this.props;
return createPortal(
      <Overlay onClick={closeModal}>
        <ModalViewer>
          <ModalImg src={modalImg} alt={tags} />
        </ModalViewer>
      </Overlay>,
      modalRoot
    );
  }


};

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
