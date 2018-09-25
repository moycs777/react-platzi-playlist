import React from 'react';
import FullScreenIcon from '../../icons/components/full-screen';
import './full-screen.css';

const FullScreen = (props) => (
    <div 
        className="Fullscreen"
        onClick={props.toggleFullScreen}
    >
        <FullScreenIcon
            size={25}
            color="white"
        />
    </div>
)

export default FullScreen;