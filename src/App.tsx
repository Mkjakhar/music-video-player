import ReactAudioPlayer from "./components/ReactAudioPlayer";
import ReactVideoPlayer from "./components/ReactVideoPlayer";
import myVideo from "./assets/video/production_id_4629778 (2160p).mp4";
import myVideo2 from "./assets/video/pexels-cottonbro-5473806 (2160p).mp4";
function App() {
  return (
    <>
      <ReactAudioPlayer />
      {/* <div className="lg:flex">
        <ReactVideoPlayer
          myVideo={myVideo}
          videoPoster="https://e0.pxfuel.com/wallpapers/905/1016/desktop-wallpaper-ai-in-game-development.jpg"
        />
        <ReactVideoPlayer
          myVideo={myVideo2}
          videoPoster="https://e0.pxfuel.com/wallpapers/626/499/desktop-wallpaper-software-development-code-at.jpg"
        />
      </div> */}
    </>
  );
}

export default App;
