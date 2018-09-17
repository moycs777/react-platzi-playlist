import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props) {
    
    console.log(props.data);
    const playlist = props.data.categories[0].playlist;
    return (
        <div className="Playlist">
            {
                playlist.map( (item,i)=> {
                    return <Media title={item.title} author={item.author} cover={item.cover} key={item.id} />
                })
            }
        </div>
    )
    
}

export default Playlist;