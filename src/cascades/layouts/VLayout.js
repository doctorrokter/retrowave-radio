'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import AbstractLayout from './AbstractLayout';
import VerticalAlignment from '../const/VerticalAlignment';
import HorizontalAlignment from '../const/HorizontalAlignment';
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
        direction: VerticalDirection.TopToBottom,
        verticalAlignment: VerticalAlignment.Center,
        horizontalAlignment: HorizontalAlignment.Center,
        className: '',
        style: {},
        width: '',
        height: '',
        visible: true
    };

    render() {
        if (this.props.visible) {
            return (
                <div className={`v-layout ${this.props.direction} ${this._additionalClass()} ${this.props.verticalAlignment} ${this.props.horizontalAlignment}`} style={this._getStyle()}>
                    {this.props.children}
                </div>
            );
        }
        return null;
    }
}

export default VLayout;