'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import './ImageView.css';
import VisualNode from '../VisualNode';
import ScalingMethod from '../const/ScalingMethod';
import assign from 'object-assign';

const table = new Map();
table.set(0, ' cover');
table.set(1, ' fill');
table.set(2, ' none');

class ImageView extends VisualNode {

    static propTypes = {
        src: PropTypes.string.isRequired,
        width: PropTypes.string,
        height: PropTypes.string,
        scalingMethod: PropTypes.oneOf([
            ScalingMethod.Cover,
            ScalingMethod.Fill,
            ScalingMethod.None
        ]),
        className: PropTypes.string,
        style: PropTypes.object,
        opacity: PropTypes.number,
        onClick: PropTypes.func
    };

    static defaultProps = {
        scalingMethod: ScalingMethod.Cover,
        className: '',
        style: {},
        opacity: 1.0
    };

    render() {
        let style = assign({}, this.props.style);
        style.width = this.props.width;
        style.height = this.props.height;
        if (this.props.opacity < 1.0) {
            style.opacity = this.props.opacity;
        }
        return (
            <div className={`image-view${table.get(this.props.scalingMethod)}${this._additionalClass()}`} style={style} onClick={this.props.onClick}>
                <img src={this.props.src} style={{width: this.props.width, height: this.props.height}}/>
            </div>
        );
    }
}

export default ImageView;