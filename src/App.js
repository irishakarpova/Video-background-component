import React, { useEffect, useState } from 'react';
import desktopVideo from './video/video_desc.mov';
import mobileVideo from './video/video_mobile.mp4'
import poster from './img/image_bg.jpg'
import './App.css';

export default ()=> {

  const [isLoaded, setIsLoaded ]  = useState(false)
  const [scrWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("load", () => {
        setIsLoaded(true)
    })
  })

  const getVideo = (scrWidth) => {
    if(scrWidth >= 768) return desktopVideo
    return mobileVideo
  }


  return(
    <div className='video-wrap'
         style={{opacity: isLoaded ? 1 : 0, transition: 'opacity 2s ease'}}>

      {isLoaded ? (
        <video
          muted
          playsInline
          autoPlay
          loop
          poster={poster}
          className='video-content'>
         <source src={ getVideo(scrWidth) } type="video/mp4" />
         </video>
      ):
        <img src={poster}  alt='video background'/> }
    </div>
  )
}
