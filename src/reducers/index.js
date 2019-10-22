const  songsReducer = () => {
    return [
        {title: 'Death On Two Legs', duration: '3:43'},
        {title: 'Bohemian Rhapsody', duration: '5,54'},
        {title: 'Lovo Of My Life', duration: '3,37'},
        {title: 'You Are My Best Friend', duration: '2:50'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

