import React, { useEffect, useState } from "react";
import desktopVideo from "./video/video-desctop.mov";
import mobileVideo from "./video/video-mobile.mov";
import poster from "./img/image_bg.jpg";
import classes from "./App.module.css";
export default (props => {
  const [isLoaded, setIsLoaded] = useState(!props.renderOnLoad);
  const [scrWidth] = useState(window.innerWidth);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (!props.renderOnLoad) {
      return;
    }

    window.addEventListener("load", loadVideo);
    return () => {
      window.removeEventListener("load", loadVideo);
    };
  }, []);

  const getVideo = scrWidth => {
    if (scrWidth >= 768) return desktopVideo;
    return mobileVideo;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes["video-wrap"]
  }, /*#__PURE__*/React.createElement("video", {
    style: {
      opacity: isLoaded ? 1 : 0,
      transition: "opacity 2s ease 0ms"
    },
    muted: true,
    playsInline: true,
    autoPlay: true,
    loop: true,
    className: classes["video-content"]
  }, /*#__PURE__*/React.createElement("source", {
    src: getVideo(scrWidth),
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("img", {
    src: poster,
    style: {
      opacity: isLoaded ? 0 : 1,
      transition: "opacity 4s ease 0ms"
    },
    className: classes["img-content"],
    alt: "video background"
  }));
});