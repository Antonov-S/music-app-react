import { useState } from "react";

import "./styles/app.scss";
import data from "./util";

import Song from "./components/Song";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
