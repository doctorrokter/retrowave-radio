'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import AbstractLayout from './AbstractLayout';
import HorizontalAlignment from '../const/HorizontalAlignment';
import VerticalAlignment from '../const/VerticalAlignment';
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
        visible: PropTypes.bool,
        onDestroy: PropTypes.func,
        onVisibilityChanged: PropTypes.func
    };

    static defaultProps = {
        direction: HorizontalDirection.LeftToRight,
        horizontalAlignment: HorizontalAlignment.Left,
        verticalAlignment: VerticalAlignment.Center,
        className: '',
        style: {},
        width: '',
        height: '',
        visible: true
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.props.visible) {
            if (this.props.onVisibilityChanged) {
                this.props.onVisibilityChanged(nextProps.visible);
            }
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    render() {
        if (this.props.visible) {
            return (
                <div className={`h-layout ${this.props.direction} ${this._additionalClass()} ${this.props.horizontalAlignment} ${this.props.verticalAlignment}`} style={this._getStyle()}>
                    {this.props.children}
                </div>
            );
        }
        return null;
    }
}

export default HLayout;