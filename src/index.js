'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TracksStore from './stores/TracksStore';

ReactDOM.render(<App tracksList={TracksStore}/>, document.getElementById('app-container'));