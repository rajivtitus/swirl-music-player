import React from "react";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioReference,
  isPlaying,
}) => {
  const selectSongHandler = async () => {
    await setCurrentSong(song);

    const selectedSong = songs.map((item) => {
      if (item.id === song.id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });

    setSongs(selectedSong);
    //check to see if song is playing
    if (isPlaying) audioReference.current.play();
  };

  return (
    <div
      onClick={selectSongHandler}
      className={`library-song-container ${song.active ? "selected" : ""} `}
    >
      <img src={song.cover} alt="Album Cover"></img>
      <div className="library-song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
