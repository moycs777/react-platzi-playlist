import React from 'react';
import './progress-bar.css';

const ProgressBar = (props) => (
    <div className="ProgressBar">
        <input
            type="range"
            min={0}
            value={props.value}
            max={props.duration}
        />
    </div>
)

export default ProgressBar;