import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Nothing Else Matters', duration: '4:55' },
        { title: 'Enter Sandman', duration: '3:46' },
        { title: 'For Whom The Bell Tolls', duration: '4:23' }
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