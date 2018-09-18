import React from 'react';
import logo from '../images/logo.png';
import './related.css';

function Related(props) {
    return (
        <div className="Related">
            <img 
                src={logo} 
                alt="Platzi-Video"
                width={250}>
            </img>
        </div>
    )
}

export default Related;