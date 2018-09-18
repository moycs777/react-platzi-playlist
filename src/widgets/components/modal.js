import React from 'react';
import './modal.css';

function Modal(props){
    return(
        <div className="Modal">
            esto es un modal
            {props.children}
            <button onClick={props.handleClick}
                className="Modal-close" >
                cerrar
            </button>
        </div>
    )
}

export default Modal;