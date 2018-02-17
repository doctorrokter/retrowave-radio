'use strict';

import React from 'react';
import HLayout from './cascades/layouts/HLayout';
import StackLayout from './cascades/layouts/StackLayout';
import ImageView from './cascades/views/ImageView';
import HorizontalAlignment from './cascades/const/HorizontalAlignment';
import VerticalAlignment from './cascades/const/VerticalAlignment';
import VLayout from './cascades/layouts/VLayout';
import './App.css';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import TracksService from './services/TracksService';
import {getMediaTime} from './utils/DateUtils';
import AudioPlayer from './AudioPlayer';

@observer
class App extends React.Component {

    static propTypes = {
        tracksList: PropTypes.object
    };

    componentDidMount() {
        this._load();
    }

    componentDidUpdate() {
        this._audio().children[0].src = this.props.tracksList.currentTrack.streamUrl;
    }

    render() {
        let store = this.props.tracksList;
        let currentTrack = this.props.tracksList.currentTrack;
        return (
            <StackLayout horizontalAlignment={HorizontalAlignment.Center}>
                <ImageView width="100%" height="100%" src="assets/images/palms-bg.png"/>
                <ImageView className={'background'} width="100%" height="100%" opacity={0.75} src={currentTrack.artworkUrl}/>
                <VLayout verticalAlignment={VerticalAlignment.StretchWithSpace} height="100%" width="100%">
                    <ImageView src="assets/images/logo.png" style={{margin: '0 auto'}}/>
                    <StackLayout horizontalAlignment={HorizontalAlignment.Center}>
                        <ImageView width="375px" height="200px" src={currentTrack.artworkUrl}/>
                        <ImageView width="500" height="250px" src="assets/images/cassette-body.png"/>
                        <HLayout style={{marginTop: '82px'}}>
                            <ImageView className={store.playing ? 'playing-slow' : ''} width="50px" src="assets/images/cogwheel.png" style={{marginLeft: '0px'}}/>
                            <ImageView className={store.playing ? 'playing-fast' : ''} width="50px" src="assets/images/cogwheel.png" style={{marginLeft: '120px'}}/>
                        </HLayout>
                    </StackLayout>
                    <HLayout horizontalAlignment={HorizontalAlignment.StretchWithSpace} width="75%" style={{margin: '0 auto'}}>
                        <ImageView width="60px" src="assets/images/ic_previous.png" onClick={this._prev}/>
                        <ImageView width="60px" src="assets/images/ic_play.png" onClick={this._play} style={{display: store.playing ? 'none' : 'block'}}/>
                        <ImageView width="60px" src="assets/images/ic_pause.png" onClick={this._pause} style={{display: store.playing ? 'block' : 'none'}}/>
                        <ImageView width="60px" src="assets/images/ic_next.png" onClick={this._next}/>
                    </HLayout>
                    <VLayout visible={currentTrack.title !== ''}>
                        <h1>{currentTrack.title}</h1>
                        <h2><span>{store.currentTime}</span> / <span style={{color: '#FF3333'}}>{getMediaTime(currentTrack.duration)}</span></h2>
                    </VLayout>
                    <AudioPlayer currentTrack={currentTrack}
                                 next={this._next}
                                 playing={store.playing}/>
                </VLayout>
            </StackLayout>
        );
    }

    _load = () => {
        TracksService.load().then(() => {
            this._next();
        });
    };

    _next = () => {
        if (this.props.tracksList.hasNext()) {
            this.props.tracksList.next();
            if (this._audio().paused) {
                this._play();
            }
        } else {
            this._load();
        }
    };

    _prev = () => {
        this.props.tracksList.prev();
        if (this._audio().paused) {
            this._play();
        }
    };

    _play = () => {
        if (this.props.tracksList.currentTrackIndex === -1) {
            this._next();
        } else {
            this.props.tracksList.playing = true;
        }
    };

    _pause = () => {
        this.props.tracksList.playing = false;
    };

    _audio = () => {
        return document.querySelector('audio');
    }
}

export default App;