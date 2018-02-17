'use strict';

import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {

    static propTypes = {
        currentTrack: PropTypes.object.isRequired,
        playing: PropTypes.bool.isRequired,
        next: PropTypes.func
    };

    componentDidUpdate(prevProps) {
        if (prevProps.currentTrack.streamUrl !== this.props.currentTrack.streamUrl) {
            this._audio().load();
        }

        if (this.props.playing) {
            this._audio().play();
        } else {
            this._audio().pause();
        }
    }

    render() {
        return (
            <audio ref="audio" onTimeUpdate={this._timeUpdate} onEnded={this.props.next}>
                <source src={this.props.currentTrack.streamUrl} type="audio/mp3"/>
            </audio>
        );
    }

    paused = () => {
        return this._audio().paused;
    };

    _timeUpdate = () => {
        this.props.currentTrack.currentPosition = this._audio().currentTime * 1000;
    };

    _audio = () => {
        return ReactDOM.findDOMNode(this.refs.audio);
    }
}

export default AudioPlayer;