'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AbstractLayout from './AbstractLayout';
import PropTypes from 'prop-types';
import './StackLayout.css';
import HorizontalAlignment from '../const/HorizontalAlignment';

class StackLayout extends AbstractLayout {

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        horizontalAlignment: PropTypes.oneOf([
            HorizontalAlignment.Left,
            HorizontalAlignment.Center,
            HorizontalAlignment.Right
        ]),
    };

    static defaultProps = {
        className: '',
        style: {},
        horizontalAlignment: HorizontalAlignment.Left
    };

    componentDidMount() {
        this._computeHeight();
    }

    componentDidUpdate() {
        this._computeHeight();
    }

    render() {
        return (
            <div className={`stack-layout ${this.props.horizontalAlignment}${this._additionalClass()}`} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    _computeHeight = () => {
        if (!this.props.style.hasOwnProperty('height')) {
            let height = this._getMaxHeight();
            this._element().style.height = height + 'px';
        }
    };

    _getMaxHeight = () => {
       return Math.max.apply(null, Array.prototype.map.call(this._element().children, (c) => {
           return c.scrollHeight;
       }));
    };

    _element = () => {
        return ReactDOM.findDOMNode(this);
    }
}

export default StackLayout;