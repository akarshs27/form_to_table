import Player from "./components/home/Player/Player";
import Song from "./components/home/Song/Song";

function App() {
  return (
    <div className="background h-screen w-full">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col relative">
          <div className="song">
            <Song />
          </div>
          <div className="player">
            <Player  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
