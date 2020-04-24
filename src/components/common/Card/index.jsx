import './styles.scss';
import { LOCALE } from '../../../constants/locale.js';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
};
const defaultProps = {
    className: null
};

function Card (props) {
    return (
        <div className={classNames(
            props.className,
            'card'
        )}
        >
            <div className="card-border">
                <img
                    alt={props.data.name}
                    className="card-img"
                    src={props.data.box_art_url}
                />
            </div>
            <div className="card-infos">
                <div className="card-title">
                    {props.data.name}
                </div>
                <div className="card-link">
                    {LOCALE.BUTTON.WATCH}
                </div>
            </div>
        </div>
    );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;
