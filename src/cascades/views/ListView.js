'use strict';

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './ListView.css';

class ListView extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        className: '',
        style: {}
    };

    render() {
        return (
            <ul className={`list-view`} style={this.props.style}>
                {this._wrap()}
            </ul>
        );
    }

    _wrap = () => {
        return this.props.children.map((c, index) => {
            return <li className={'list-item'} key={`list_item_${index}`}>{c}</li>
        });
    }
}

export default ListView;