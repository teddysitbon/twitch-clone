import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { path } from './svgPath.js';

class Svg extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        height: PropTypes.string,
        type: PropTypes.string,
        viewBox: PropTypes.string,
        width: PropTypes.string,
    };

    static defaultProps = {
        className: null,
        height: null,
        type: null,
        viewBox: '0 0 20 20',
        width: null,
    };

    getPath () {
        return path[this.props.type];
    }

    render () {
        return (
            <svg
                className={this.props.className}
                dangerouslySetInnerHTML={{ __html: this.getPath() }}
                height={this.props.height}
                viewBox={this.props.viewBox}
                width={this.props.width}
            />
        );
    }
}

export default Svg;
