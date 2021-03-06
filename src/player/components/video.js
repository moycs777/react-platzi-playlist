import React from 'react';
import './video.css';

class Video extends React.Component {
    togglePlay() {
        console.log("funcion togglePlay " + this.props);
        if (this.props.pause) {
            this.video.play()
        }else{
            this.video.pause()
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("ciclo de vida component will receive props " + JSON.stringify(nextProps));
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay();
        }
    }
    setRef = element => {
        this.video = element;
    }
    render(){
        const { 
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props;
        return(
            <div className="Video">
                <video                    
                    controls={this.props.controls}
                    autoPlay={this.props.autoplay}
                    src={this.props.src}
                    ref={this.setRef}
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                />
            </div>
        )
    }
}

export default Video;