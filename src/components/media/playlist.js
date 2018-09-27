import React from 'react';
import Media from './media.js';
import Play from '../../icons/components/play';
   
import './playlist.css';

function Playlist(props) {
    
    return (
        <div className="Playlist">
            <Play
                size={100}
                color="red"
            />
            {
                props.playlist.map( (item,i)=> {
                    return <Media 
                        openModal={props.handleOpenModal} 
                        title={item.title} 
                        author={item.author} 
                        cover={item.cover} 
                        key={item.id} 
                        src={item.src}
                    />
                })
            }
        </div>
    )
    
}

export default Playlist;