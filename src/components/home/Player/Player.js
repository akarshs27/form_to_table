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

const Player = () => {
  return (
    <>
      <Card>
        {/* <div className="p-8">
                    <div className="bg-gray-100 flex w-full">
                        <div className="">
                            <img className="rounded-2xl h-48 object-cover object-center border-8 border-purple-200 " src="https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg" alt="Song name"/>
                        </div>
                        <div className=" bg-blue-100 p-4 w-96">
                            <h2>Player</h2>
                            <h2>Player</h2>
                            <p>Player</p>
                            <div>Player</div>
                        </div>
                    </div>
                </div> */}
        <div className="player-music">
          <div className="time-control">
            <p>0:00</p>
            <div style={{}} className="track">
              <input min={0} type="range" />
              <div style={{}} className="animate-track"></div>
            </div>
            <p>0:00</p>
          </div>
          <div className="play-control">
            <Button>
              <FontAwesomeIcon
                className="skip-back"
                size="3x"
                icon={faAngleLeft}
              />
            </Button>
            <Button>
              <FontAwesomeIcon className="play" size="3x" icon={faPlay} />
            </Button>
            <Button>
              <FontAwesomeIcon
                className="skip-forward"
                size="3x"
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
