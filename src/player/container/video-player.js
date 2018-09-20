import React from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

class VideoPlayerContainer extends React.Component {
    state = {
        pause: true,
    }
    toggleClick = (event) => {
        console.log("has clickeado un boton");
        this.setState({
            pause: !this.state.pause
        })
    }
    render(){
        return(
            <VideoPlayerLayout>
                <Title 
                    title="titulo del video"
                />
                <PlayPause
                    pause={this.state.pause}
                    handleClick={this.toggleClick}
                />
                <Video
                    controls={true}
                    autoplay={false}
                    src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayerContainer;