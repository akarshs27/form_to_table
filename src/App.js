import Player from "./components/home/Player/Player";
import Song from "./components/home/Song/Song";
import { useState, useRef } from "react";
import data from "./data/data";
import { playAudio } from "./data/util";

function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const UpdateTimeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: percentage,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    playAudio(isPlaying, audioRef);
    return;
  };

  return (
    <div className="background h-screen w-full">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col relative">
          <div className="song">
            <Song currentSong={currentSong} />
          </div>
          <div className="player">
            <Player
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentSong={currentSong}
              audioRef={audioRef}
              songInfo={songInfo}
              setSongInfo={setSongInfo}
              songs={songs}
              setCurrentSong={setCurrentSong}
              setSongs={setSongs}
            />
          </div>
          <audio
            onLoadedMetadata={UpdateTimeHandler}
            onTimeUpdate={UpdateTimeHandler}
            ref={audioRef}
            src={currentSong.audio}
            onEnded={songEndHandler}
          ></audio>
        </div>
      </div>
    </div>
  );
}

export default App;
