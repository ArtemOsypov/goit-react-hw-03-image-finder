import React, {Components} from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGallaryItem extends Components {
    state = { isModalOpen: false };

    toggleModal = () => {
        this.setState(prevState => ({ isModalOpen: !prevState.isModal }));
    };

    render() {
        const { webformatURL, tags, largeImageURL } = this.props;
        const { isModalOpen } = this.state;
        const { toggleModal } = this;

        return (
      <GalleryItem className="gallery-item">
        <Image
          src={webformatURL}
          alt={tags}
          width="500"
          height="210"
          loading="lazy"
          onClick={toggleModal}
        />

        {isModalOpen && (
          <Modal
            modalImg={largeImageURL}
            tags={tags}
            closeModal={toggleModal}
          />
        )}
      </GalleryItem>
    );
  }
}
  

ImageGallaryItem.PropTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};