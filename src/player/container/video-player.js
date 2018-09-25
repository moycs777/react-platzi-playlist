import React from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerntrols from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/FullScreen';

class VideoPlayerContainer extends React.Component {
    state = {
        pause: true,
        duration:0,
        currentTime:0,
        loading:false,
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
    handleProgressChange = event => {
        this.video.currentTime = event.target.value;
    }
    handleSeeking = event => {
        this.setState({
            loading:true,
        })
    }
    handleSeeked = event => {
        this.setState({
            loading: false,
        })
    }
    handleVolumeChange = event => {
        console.log("volume change");
        this.video.volume = event.target.value;
    }
    toggleFullScreen = event => {
        console.log("toggle full screen");
        /* if (!document.webkitIsFullScreen || ! document.mozRequestFullScreen) {
            this.player.webkitRequestFullScreen();
        } else {
            document.webkitExitFullscreen();
        } */
        if (this.player.requestFullscreen) {
            this.player.requestFullscreen();
        } else if (this.player.mozRequestFullScreen) { /* Firefox */
            this.player.mozRequestFullScreen();
        } else if (this.player.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            this.player.webkitRequestFullscreen();
        } else if (this.player.msRequestFullscreen) { /* IE/Edge */
            this.player.msRequestFullscreen();
        }

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }
    setRef = element => {
        this.player = element;
    }
    render(){
        return(
            <VideoPlayerLayout
                setRef={this.setRef}
            >
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
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volume
                        handleVolumeChange={this.handleVolumeChange}
                    />
                    <FullScreen
                        toggleFullScreen={this.toggleFullScreen}

                    />
                </VideoPlayerntrols>
                <Spinner
                    active={this.state.loading}
                />
                <Video
                    controls={false}
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayerContainer;