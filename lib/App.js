import React, { useEffect, useState } from 'react';
import desktopVideo from './video/video-desctop.mov';
import mobileVideo from './video/video-mobile.mov';
import poster from './img/image_bg.jpg';
import './App.css';
export default (() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoaded(true);
    });
    return () => {
      window.removeEventListener("load", () => {
        setIsLoaded(false);
      });
    };
  }, [isLoaded]);

  const getVideo = scrWidth => {
    if (scrWidth >= 768) return desktopVideo;
    return mobileVideo;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "video-wrap",
    style: {
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 2s ease'
    }
  }, isLoaded ? /*#__PURE__*/React.createElement("video", {
    muted: true,
    playsInline: true,
    autoPlay: true,
    loop: true,
    poster: poster,
    className: "video-content"
  }, /*#__PURE__*/React.createElement("source", {
    src: getVideo(scrWidth),
    type: "video/mp4"
  })) : /*#__PURE__*/React.createElement("img", {
    src: poster,
    alt: "video background"
  }));
});