'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import AbstractLayout from './AbstractLayout';
import VerticalAlignment from '../const/VerticalAlignment';
import VerticalDirection from '../const/VerticalDirection';
import './VLayout.css';

class VLayout extends AbstractLayout {

    static propTypes = {
        direction: PropTypes.oneOf([
            VerticalDirection.TopToBottom,
            VerticalDirection.BottomToTop
        ]),
        verticalAlignment: PropTypes.oneOf([
            VerticalAlignment.Left,
            VerticalAlignment.Center,
            VerticalAlignment.Right,
            VerticalAlignment.Stretch,
            VerticalAlignment.StretchWithSpace
        ]),
        className: PropTypes.string,
        style: PropTypes.object,
        width: PropTypes.string,
        height: PropTypes.string,
        visible: PropTypes.bool
    };

    static defaultProps = {
        direction: VerticalDirection.TopToBottom,
        verticalAlignment: VerticalAlignment.Center,
        className: '',
        style: {},
        width: '',
        height: '',
        visible: true
    };

    render() {
        if (this.props.visible) {
            return (
                <div className={`v-layout ${this.props.direction} ${this._additionalClass()} ${this.props.verticalAlignment}`} style={this._getStyle()}>
                    {this.props.children}
                </div>
            );
        }
        return null;
    }
}

export default VLayout;