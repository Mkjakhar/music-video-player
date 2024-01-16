import React, { useRef, useState, useEffect } from "react";

import { PauseIcon, PlayIcon } from "@heroicons/react/16/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
interface ReactVideoPlayerProps {
  myVideo: string;
  videoPoster: string;
}
const ReactVideoPlayer: React.FC<ReactVideoPlayerProps> = ({
  myVideo,
  videoPoster,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedMetadata = () => {
        setDuration(videoRef.current?.duration || 0);
      };
      videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }
  }, []);

  const playPauseHandler = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const timeUpdateHandler = () => {
    setCurrentTime(videoRef.current?.currentTime || 0);
  };

  const progressBarClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressContainer = e.currentTarget;
    const clickPosition =
      e.clientX - progressContainer.getBoundingClientRect().left;
    const totalWidth = progressContainer.clientWidth;
    const percentage = (clickPosition / totalWidth) * 100;
    const newTime = (percentage / 100) * (videoRef.current?.duration || 0);

    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };
  const fullScreen = () => videoRef.current?.requestFullscreen();
  return (
    <div className="container pb-10 text-center">
      <div className="relative inline-block group">
        <video
          onDoubleClick={fullScreen}
          poster={videoPoster}
          onClick={playPauseHandler}
          ref={videoRef}
          width={600}
          height={400}
          muted
          className="w-[600px] h-[250px] sm:h-[350px] object-cover"
          onTimeUpdate={timeUpdateHandler}
          onEnded={() => setIsPlaying(!isPlaying)}
        >
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="controls bottom-0 left-0">
          <button
            onClick={playPauseHandler}
            className={`absolute top-1/2 opacity-0 group-hover:opacity-100 duration-300 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full ${
              isPlaying || "opacity-100"
            }`}
          >
            {isPlaying ? (
              <PauseIcon className="text-white h-10 w-10" />
            ) : (
              <PlayIcon className="text-white h-10 w-10" />
            )}
          </button>
          <div className="absolute bottom-1 left-2 right-2 opacity-0 duration-700 group-hover:opacity-100">
            <div
              className="progress-bar-container"
              onClick={progressBarClickHandler}
            >
              <div
                className="progress-bar relative"
                style={{
                  width: `${
                    (currentTime / (videoRef.current?.duration || 1)) * 100
                  }%`,
                }}
              >
                <span className="h-2 w-2 rounded-xl bg-red-500 inline-block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2"></span>
              </div>
            </div>
            <div className="flex mt-1 justify-between items-baseline w-100">
              <span className="font-Merriweather text-white">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <ArrowTopRightOnSquareIcon
                className="h-7 w-7 text-white cursor-pointer"
                onClick={fullScreen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactVideoPlayer;
