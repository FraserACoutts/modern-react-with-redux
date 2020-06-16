import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Enter Sandman', duration: '4:25' },
        { title: 'Hells Bells', duration: '3:46' },
        { title: 'Crawling', duration: '3:52' },
        { title: 'By the way', duration: '4:12' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});