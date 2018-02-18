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
        this._computeSize();
    }

    componentDidUpdate() {
        this._computeSize();
    }

    render() {
        return (
            <div className={`stack-layout ${this.props.horizontalAlignment}${this._additionalClass()}`} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    _computeSize = () => {
        if (!this.props.style.hasOwnProperty('height')) {
            let height = this._getMaxHeight();
            this._element().style.height = height + 'px';
        }

        // if (!this.props.style.hasOwnProperty('width')) {
        //     let width = this._getMaxWidth();
        //     this._element().style.width = width + 'px';
        // }
    };

    _getMaxHeight = () => {
       return Math.max.apply(null, Array.prototype.map.call(this._element().children, (c) => {
           return c.scrollHeight;
       }));
    };

    _getMaxWidth = () => {
        return Math.max.apply(null, Array.prototype.map.call(this._element().children, (c) => {
            return c.offsetWidth;
        }));
    };

    _element = () => {
        return ReactDOM.findDOMNode(this);
    }
}

export default StackLayout;