import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/imageGallryItem';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallary/ImageGallary.styled.jsx';

export const ImageGallary = ({ images }) => {
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

ImageGallary.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            ladgeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    ),
};