import React from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerntrols from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';

class VideoPlayerContainer extends React.Component {
    state = {
        pause: true,
        duration:0,
        currentTime:0,
    }
    toggleClick = (event) => {
        console.log("has clickeado un boton");
        this.setState({
            pause: !this.state.pause
        })
        console.log("el estado de pause es: " + this.state.pause);
    }
    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration,
        })
    }
    handleTimeUpdate = (event) => {
        this.setState({
            currentTime: this.video.currentTime,
        })
    }
    render(){
        return(
            <VideoPlayerLayout>
                <Title 
                    title="titulo del video"
                />
                <VideoPlayerntrols>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.toggleClick}
                    />
                    <Timer
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar
                        value={this.state.currentTime}
                        duration={this.state.duration}
                    />
                </VideoPlayerntrols>
                <Video
                    controls={true}
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayerContainer;