Video background component in React
 
HTML5 allows us to use the <video> element very comfortably and easily.
 
However, I want to ensure a number of issues that could impact performance are solved.
Videos are not hindering your website's loading time
Videos are adapted to different screen sizes
The video background appears smooth and transitions after the rest of the page is loaded

Step 1
Creating the React component that contains the video tags in JSX.
 
  render(){
    return (
      <>
         {this.state.loading && (
           <video
             muted
             playsInline
             autoPlay
             poster={poster}
              style={{
                width: "100%"
              }}
            >
              <source src={videoBg} type="video/mp4" />
            </video>
         )}
      </>
    )
  }


