'use strict';

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VisualNode extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        className: '',
        style: {}
    };

    _additionalClass = () => {
        return this.props.className !== '' ? ' ' + this.props.className : this.props.className;
    };
}

export default VisualNode;