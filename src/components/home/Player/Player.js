import Card from "../../common/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import "./Player.scss";
import Button from "../../common/Button/Button";

const Player = ({
    isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  currentSong,
  setCurrentSong,
  setSongs
}) => {

    const playAudio = () => {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(!isPlaying);
        } else {
          audioRef.current.play();
          setIsPlaying(!isPlaying);
        }
      };

      const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
          if (song.id === nextPrev.id) {
            return {
              ...song,
              active: true,
            };
          } else {
            return {
              ...song,
              active: false,
            };
          }
        });
    
        setSongs(newSongs);
      };


      const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
      };

      const getTime = (time) => {
        return (
          Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
      };

      const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    
        if (direction === "skip-forward") {
          setCurrentSong(songs[(currentIndex + 1) % songs.length]);
          activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === "skip-back") {
          if ((currentIndex - 1) % songs.length === -1) {
            setCurrentSong(songs[songs.length - 1]);
            playAudio(isPlaying, audioRef);
            return;
          }
          setCurrentSong(songs[(currentIndex - 1) % songs.length]);
          activeLibraryHandler(songs[songs.length - 1]);
        }
      };

      const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`,
      };

  return (
    <>
      <Card>
        <div className="flex flex-col p-8">

        {/* <div class="neumorphic-slider mx-auto" onselectstart="return false">
                <div class="neumorphic-slider__text neumorphic-slider__text_left">1:36</div>
                <div class="neumorphic-slider__back"></div>
                <div class="neumorphic-slider__line"></div>
                <div class="neumorphic-slider__thumb"></div>
                <div class="neumorphic-slider__text neumorphic-slider__text_right">4:00</div>
        </div> */}
        <div className="flex space-x-2">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
                    onChange={dragHandler}
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    type="range"
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
          <div className="play-control flex space-x-8 justify-center">
            <Button>
              <FontAwesomeIcon
                className="skip-back neumorphic-btn_fab"
                size="2x"
                icon={faAngleLeft}
                onClick={() => skipTrackHandler("skip-back")}
              />
            </Button>
            <Button>
              <FontAwesomeIcon 
              onClick={playAudio}
              className="play neumorphic-btn_fab" size="2x"
              icon={isPlaying ? faPause : faPlay} />
            </Button>
            <Button>
              <FontAwesomeIcon
               onClick={() => skipTrackHandler("skip-forward")}
                className="skip-forward neumorphic-btn_fab"
                size="2x"
                icon={faAngleRight}
              />
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Player;
