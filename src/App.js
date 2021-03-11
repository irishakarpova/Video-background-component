import React, { useEffect, useState } from 'react';
import desktopVideo from './video/video-desktop.mp4';
import mobileVideo from './video/video-mobile.mov'
import poster from './img/image_bg.jpg'
import './App.css';

const App = (props) => {

  const [isLoaded, setIsLoaded ]  = useState(false)
  const [scrWidth] = useState(window.innerWidth)

  const loadVideo = () => {
      setIsLoaded(true)
  }

  useEffect(() => {
    if(props.renderOnLoad) {
      window.addEventListener("load", loadVideo)
      return () => {
        window.removeEventListener('load', loadVideo);
      };
    } else {
      loadVideo();
    }
  })
  
  const getVideo = (scrWidth) => {
    if(scrWidth >= 768) return desktopVideo
    return mobileVideo
  }

  return(
    <div className='video-wrap'
         style={{opacity: isLoaded ? 1 : 0, transition: 'opacity 3s ease'}}>
      {isLoaded ? (
        <video
          muted
          playsInline
          autoPlay
          loop
          poster={poster}
          className='video-content'>
          <source src={ getVideo(scrWidth) } type="video/ogg" />
          <source src={ getVideo(scrWidth) } type="video/mp4" />
         </video>
      ):
        <img src={poster}  alt='video background'/> }
    </div>
  )
}

export default App
