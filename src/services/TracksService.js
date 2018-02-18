'use strict';

import TracksStore from '../stores/TracksStore';
import Track from '../models/Track';
import Request from './Request';

class TracksService {
    load() {
        return Request.get(`https://retrowave.ru/api/v1/tracks?limit=25&cursor=${TracksStore.cursor}`).then((data) => {
            let response = JSON.parse(data);
            let tracks = response.body.tracks.map((t) => {
                let track = new Track();
                track.artworkUrl = 'https://retrowave.ru' + t.artworkUrl;
                track.id = t.id;
                track.title = t.title;
                track.streamUrl = 'https://retrowave.ru' + t.streamUrl;
                track.duration = t.duration;
                return track;
            });
            TracksStore.tracks = TracksStore.tracks.concat(tracks);
            TracksStore.cursor = response.body.cursor;
            return true;
        });
    }
}

export default new TracksService();