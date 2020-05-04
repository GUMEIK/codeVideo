import React, { Component } from 'react'
import video from 'video.js'
import 'video.js/dist/video-js.css'
// import '../../static/video/test.mp4'
export default class VideoCom extends Component {
    render() {
        return (
            
                <video
    id="my-video"
    // 视频自适应大小vjs-fluid
    className="video-js vjs-fluid"
    controls
    preload="auto"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
    style={{height:500}}
  >
    <source src={this.props.source} type="video/mp4" />
    {/* <source src={this.props.source} type="video/mp4" /> */}

    <source src="MY_VIDEO.webm" type="video/webm" />
    <p className="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>
            
        )
    }
}
