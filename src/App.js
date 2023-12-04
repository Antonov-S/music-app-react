import { useState, useRef } from "react";

import "./styles/app.scss";
import data from "./util";

import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";

function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });

  const timeUpdateHandler = e => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} />
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} />
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} src={currentSong.audio} ref={audioRef}></audio>
    </div>
  );
}

export default App;
