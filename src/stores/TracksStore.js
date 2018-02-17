'use strict';

import {observable, computed} from 'mobx';
import Track from '../models/Track';
import {getMediaTime} from '../utils/DateUtils';

function defaultTrack() {
    let t = new Track();
    t.artworkUrl = 'assets/images/cover.jpg';
    t.title = '';
    return t;
}

class TracksStore {
    @observable tracks = [];
    @observable currentTrack = defaultTrack();
    @observable playing = false;
    currentTrackIndex = -1;
    cursor = '';

    @computed get currentTime() {
        return getMediaTime(this.currentTrack.currentPosition);
    };

    next = () => {
        if (this.hasTracks() && this.currentTrackIndex < (this.tracks.length - 1)) {
            let t = this.tracks[++this.currentTrackIndex];
            t.currentPosition = 0;
            this.currentTrack = t;
        }
    };

    prev = () => {
        if (this.hasTracks() && this.currentTrackIndex !== 0) {
            let t = this.tracks[--this.currentTrackIndex];
            t.currentPosition = 0;
            this.currentTrack = t;
        }
    };

    hasNext = () => {
        return this.currentTrackIndex < this.tracks.length - 1;
    };

    hasTracks = () => {
        return this.tracks.length > 0;
    }
}

export default new TracksStore();