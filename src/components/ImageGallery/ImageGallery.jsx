import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled.jsx';

export const ImageGallery = ({ images }) => {
    return (
        <Gallery>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        tags={tags}
                    />
                );
            })}

        </Gallery>
    );

};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            ladgeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    ),
};