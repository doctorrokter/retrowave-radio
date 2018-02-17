'use strict';

import {observable} from 'mobx';

class Track {
    id = '';
    artworkUrl = '';
    streamUrl = '';
    duration = 0;
    title = '';
    @observable currentPosition = 0;
}

export default Track;