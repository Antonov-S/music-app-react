import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Player({ currentSong }) {
  const audioRef = useRef(null);

  const playSongHandler = () => {
    audioRef.current.play();
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" onClick={playSongHandler} size="2x" icon={faPlay} />
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
      </div>
      <audio src={currentSong.audio} ref={audioRef}></audio>
    </div>
  );
}
