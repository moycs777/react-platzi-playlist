import React from 'react';
import './video.css';

class Video extends React.Component {
    render(){
        return(
            <div className="Video">
                <video
                    controls={this.props.controls}
                    autoPlay={this.props.autoplay}
                    src={this.props.src}
                />
            </div>

        )
    }
}

export default Video;