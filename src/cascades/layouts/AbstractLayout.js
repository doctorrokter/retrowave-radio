'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import VisualNode from '../VisualNode';
import assign from "object-assign";

class AbstractLayout extends VisualNode {

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        className: '',
        style: {}
    };

    _getStyle = () => {
        let style = assign({}, this.props.style);
        if (!style.hasOwnProperty('width') && this.props.width !== '') {
            style.width = this.props.width;
        }

        if (!style.hasOwnProperty('height') && this.props.height !== '') {
            style.height = this.props.height;
        }
        return style;
    }
}

export default AbstractLayout;