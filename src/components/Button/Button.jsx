import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onLoadMore }) => {
    return (
        <ButtonLoadMore type="button" onClick={onLoadMore}>
            Load more

        </ButtonLoadMore>
    );
};

Button.propTypes = { onLoadMore: PropTypes.func.isRequired };