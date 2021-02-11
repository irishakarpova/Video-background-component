<h1>Video background component in React</h1>
<p>HTML5 allows us to use the <video> element very comfortably and easily.
 
However, I want to ensure a number of issues that could impact performance are solved.
</p>
<ul>
<li>Videos are not hindering your website's loading time</li>
<li>Videos are adapted to different screen sizes</li>
<li>The video background appears smooth and transitions after the rest of the page is loaded</li>
</ul>
<h3>Step 1</h3>
<p>Creating the React component that contains the video tags in JSX.</p>
  
```javaScript
  render(){
    return (
      {this.state.loading && (
         <video
           muted
           playsInline
           autoPlay
           poster={poster}
           style={{ width: "100%" }} >
           <source src={videoBg} type="video/mp4" />
         </video>
     )}
    )
  }

```
<h3>Step 2</h3>
<p>
  Video content takes more time to load than other elements which is why it is good practice to defer loading videos until the initial page load is complete.

  One of the ways is to use a load event in componentDidMount, 
  The Effect Hook in function component.
</p>

```javaScript
export default () => {
 
  const [isLoaded, setIsLoaded ]  = useState(false)
  
  const loadVideo = () => {
      setIsLoaded(true)
  }

  useEffect(() => {
    window.addEventListener("load", loadVideo)
    return () => {
      window.removeEventListener('load', loadVideo);
    };
  })
    
  return (
      {isLoaded ? (
        <video
          muted
          playsInline
          autoPlay
          loop
          poster={poster}
          style={{ position: "fixed", height: "100px" }}
          >
          <source src={videoBg} type="video/mp4" />
         </video>
      ):
        <img src={poster} style={{margin: 0, height: '100px'}} alt='tatatata'/> 
      })
}
```
<h3>Step 3</h3>
<p>In order to adapt size the video according to the device width, I put the property innerWidth in the state component:</p>

```javaScript
 const [width] = useState(window.innerWidth)

```
<p>Depending on the condition, I show the correct video:</p>

```javaScript
  <source src={ width > 1000 ? mobileVideo: desktopVideo } type="video/mp4" />

```

<p>In the case that I have different versions of video, I can use the switch statement</p>
  
```javaScript
  const getVideo = (scrWidth) => {
    if(scrWidth >= 768) return desktopVideo
    return mobileVideo
  }

```

<p>Finally, I call the function</p>

```javaScript
  <source src={ getVideo(scrWidth) } type="video/mp4" />

```
 <h3>Conclusion</h3>
 <p>I created a small functional component with no third-party libraries that displays a video on the web page.</p>
 
 ```javaScript
 import React, { useEffect, useState } from 'react';
import desktopVideo from './video/forest.mov';
import mobileVideo from './video/Smoke_Light_08_Videvo.mov'
import poster from './img/image_bg.png'
import './App.css';
 
export default () => {
  const [isLoaded, setIsLoaded ]  = useState(false)
  const [scrWidth] = useState(window.innerWidth)
 
  const loadVideo = () => {
      setIsLoaded(true)
  }

  useEffect(() => {
    window.addEventListener("load", loadVideo)
    return () => {
      window.removeEventListener('load', loadVideo);
    };
  })
 
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
         <source src={ scrWidth > 1000 ? desktopVideo : mobileVideo } type="video/mp4" />
         </video>
      ):
        <img src={poster} style={{margin: 0, height: '100%', opacity: 0}} alt='tatatata'/> }
    </div>
  )
}

```







