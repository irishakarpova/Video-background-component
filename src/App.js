import React, { useEffect, useState } from "react";
import desktopVideo from "./video/video-desctop.mov";
import mobileVideo from "./video/video-mobile.mov";
import poster from "./img/image_bg.jpg";
import classes from "./App.module.css";

export default (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrWidth] = useState(window.innerWidth);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    window.addEventListener("load", loadVideo);
    return () => {
      window.removeEventListener("load", loadVideo);
    };
  }, []);

  const getVideo = (scrWidth) => {
    if (scrWidth >= 768) return desktopVideo;
    return mobileVideo;
  };

  return (
    <div className={classes["video-wrap"]}>
      <video
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 2s ease 0ms",
        }}
        muted
        playsInline
        autoPlay
        loop
        className={classes["video-content"]}
      >
        <source src={getVideo(scrWidth)} type="video/mp4" />
      </video>

      <img
        src={poster}
        style={{
          opacity: isLoaded ? 0 : 1,
          transition: "opacity 8s ease 0ms",
        }}
        className={classes["img-content"]}
        alt="video background"
      />
    </div>
  );
};
