import { songsData } from "./common/SongsData";
import { useRef, useState, useEffect } from "react";
import {
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/16/solid";

const ReactAudioPlayer = () => {
  const songRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentSong, setCurrentSong] = useState(songsData[3]);
  const elemWidth = (currentTime / duration) * 100;

  useEffect(() => {
    if (isPlaying) {
      songRef.current?.play();
    } else {
      songRef.current?.pause();
    }
    const isAudioPlaying = !songRef.current?.paused;
    setIsPlaying(isAudioPlaying);
  }, [isPlaying, currentSong]);

  useEffect(() => {
    if (songRef.current) {
      const handleLoadedMetadata = () => {
        setDuration(songRef.current?.duration || 0);
      };
      songRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }
  }, [currentSong]);

  const timeUpdateHandler = () => {
    setCurrentTime(songRef.current?.currentTime || 0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const currentIndex = songsData.findIndex(
    (song) => song.id === currentSong.id
  );

  const prevSong = () => {
    const newIndex = (currentIndex - 1 + songsData.length) % songsData.length;
    setCurrentSong(songsData[newIndex]);
    setIsPlaying(true);
  };

  const nextSong = () => {
    const newIndex = (currentIndex + 1) % songsData.length;
    setCurrentSong(songsData[newIndex]);
    setIsPlaying(true);
  };
  const playCurrent = (val: string) => {
    const currentSongIndex = songsData.findIndex((song) => song.id === val);
    setCurrentSong(songsData[currentSongIndex]);
    setIsPlaying(true);
  };
  const progressBarClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressContainer = e.currentTarget;
    const clickPosition =
      e.clientX - progressContainer.getBoundingClientRect().left;
    const totalWidth = progressContainer.clientWidth;
    const percentage = (clickPosition / totalWidth) * 100;
    const newTime = (percentage / 100) * (songRef.current?.duration || 0);

    if (songRef.current) {
      songRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setIsPlaying(true);
    }
  };
  return (
    <>
      <div className="container flex flex-col items-center py-12">
        <div
          style={{ backgroundImage: `url('${currentSong.img}')` }}
          className="max-w-[600px] w-full bg-cover bg-center relative overflow-hidden z-10 text-white p-3 sm:py-7 sm:px-5 rounded flex flex-col gap-2"
        >
          <div className="absolute inset-0 bg-black opacity-80 -z-10"></div>
          <p className="text-end font-Merriweather">{`${currentIndex + 1}/${
            songsData.length
          }`}</p>
          <p className="text-center font-Roboto">
            {currentSong.title} - {currentSong.artist}
          </p>
          <audio
            onTimeUpdate={timeUpdateHandler}
            ref={songRef}
            src={currentSong.url}
            onEnded={() => nextSong()}
          ></audio>
          <div className="flex gap-5 justify-center items-center">
            <button onClick={prevSong}>
              <BackwardIcon className="h-8 w-8" />
            </button>
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <PauseCircleIcon className="h-10 w-10" />
              ) : (
                <PlayCircleIcon className="h-10 w-10" />
              )}
            </button>
            <button onClick={nextSong}>
              <ForwardIcon className="h-8 w-8" />
            </button>
          </div>
          <div
            onClick={progressBarClickHandler}
            className="rounded bg-stone-500"
          >
            <div
              style={{
                width: `${elemWidth}%`,
              }}
              className="h-1 bg-green-500 rounded relative"
            >
              <span className="h-2 w-2 rounded-xl bg-green-500 inline-block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2"></span>
            </div>
          </div>
          <div className="text-right font-Merriweather">
            {formatTime(currentTime)}/{formatTime(duration)}
          </div>
        </div>
        <div className="max-w-[600px] w-full grid grid-cols-1 sm:grid-cols-4 gap-1 mt-2">
          {songsData.map((val) => (
            <div
              key={val.id}
              onClick={() => playCurrent(val.id)}
              className="bg-black flex sm:block gap-3 items-center rounded p-2 sm:p-3 cursor-pointer text-white"
            >
              <img
                className="w-14 sm:w-full rounded h-14 sm:h-[120px] object-cover"
                src={val.img}
                alt="artist-img"
              />
              <p className="font-Roboto leading-[120%] text-sm sm:mt-3">
                <span>{val.title} </span>
                <span className="sm:inline-block hidden">-</span>
                <span className="block sm:inline-block text-xs sm:text-sm">
                  {" "}
                  {val.artist}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReactAudioPlayer;
