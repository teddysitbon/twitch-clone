import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { getNumberWithSpaces } from '../../../helpers';

const propTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
};
const defaultProps = {
    className: null
};

function Streamer (props) {
    return (
        <div className={classNames(
            props.className,
            'streamer'
        )}
        >
            <div className="streamer-border">
                <img
                    alt={props.data.user_id}
                    className="streamer-img"
                    src={props.data.realPicture}
                />
            </div>
            <div className="streamer-infos">
                <div className="streamer-login">
                    {props.data.login}
                </div>
                <div className="game-name">
                    {props.data.gameName}
                </div>
            </div>
            <div className="streamer-viewers">
                <span>
                    {getNumberWithSpaces(props.data.viewer_count)}
                </span>
            </div>
        </div>
    );
}

Streamer.propTypes = propTypes;
Streamer.defaultProps = defaultProps;
export default Streamer;
