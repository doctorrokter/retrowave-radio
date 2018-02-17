'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import AbstractLayout from './AbstractLayout';
import HorizontalAlignment from '../const/HorizontalAlignment';
import HorizontalDirection from '../const/HorizontalDirection';
import './HLayout.css';

class HLayout extends AbstractLayout {

    static propTypes = {
        direction: PropTypes.oneOf([
            HorizontalDirection.LeftToRight,
            HorizontalDirection.RightToLeft
        ]),
        horizontalAlignment: PropTypes.oneOf([
            HorizontalAlignment.Left,
            HorizontalAlignment.Center,
            HorizontalAlignment.Right,
            HorizontalAlignment.Stretch,
            HorizontalAlignment.StretchWithSpace
        ]),
        className: PropTypes.string,
        style: PropTypes.object,
        width: PropTypes.string,
        height: PropTypes.string,
        visible: PropTypes.bool
    };

    static defaultProps = {
        direction: HorizontalDirection.LeftToRight,
        horizontalAlignment: HorizontalAlignment.Left,
        className: '',
        style: {},
        width: '',
        height: '',
        visible: true
    };

    render() {
        if (this.props.visible) {
            return (
                <div className={`h-layout ${this.props.direction} ${this._additionalClass()} ${this.props.horizontalAlignment}`} style={this._getStyle()}>
                    {this.props.children}
                </div>
            );
        }
        return null;
    }
}

export default HLayout;