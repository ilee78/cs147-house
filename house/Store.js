import React from 'react';
import { createStore } from 'state-pool';

const Store = createStore();
Store.setState("user", 
{ 
    username: '', 
    location: '', 
    distance: 0, 
    bio: '', 
    tags: [], 
    houses: ['add a house'], 
    songs: [
        { key: 0, song: '', artist: ''},
        { key: 1, song: '', artist: ''},
        { key: 2, song: '', artist: ''}
    ]
});

export default Store;