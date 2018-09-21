import React from 'react';
import './video-player-controls.css';

const VideoPlayerntrols = (props) => (
    <div className="VideoPlayerControls">
        {props.children}
    </div>
)

export default VideoPlayerntrols;