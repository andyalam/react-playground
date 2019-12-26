import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Killing Me', duration: '4:01' },
    { title: 'Bandit', duration: '2:50' },
    { title: 'More Money More Ice', duration: '1:43' },
    { title: 'Loyalty Before Royalty', duration: '5:05' }
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
