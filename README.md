<h1>Video background component in React</h1>
<p>HTML5 allows us to use the <video> element very comfortably and easily.
 
However, I want to ensure a number of issues that could impact performance are solved.
</p>
<ul>
<li>Videos are not hindering your website's loading time</li>
<li>Videos are adapted to different screen sizes</li>
<li>The video background appears smooth and transitions after the rest of the page is loaded</li>
</ul>
<h3>Step 1. Creating the React component that contains the video tags in JSX.</h3>
  
```javaScript
  render(){
    return (
      {this.state.loading && (
         <video
           muted
           playsInline
           autoPlay
           poster={poster}
           style={{ width: "100%" }}
          >
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
  useEffect(() => {
    window.addEventListener("load", () => {
        setIsLoaded(true)
    })
  })
    return (
      <>
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
          <img src={poster} style={{margin: 0, height: '100px'}} alt='tatatata'/> }
      </>
    )
}
}
```
<h3>Step 3</h3>
<p>In order to adapt size the video according to the device width, I put the property innerWidth in the state component:</p>
```javaScript
  render(){
    return (
      {this.state.loading && (
         <video
           muted
           playsInline
           autoPlay
           poster={poster}
           style={{ width: "100%" }}
          >
           <source src={videoBg} type="video/mp4" />
          </video>
     )}
    )
  }

```

