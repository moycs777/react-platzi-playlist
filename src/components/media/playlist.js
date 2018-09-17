import React from 'react';
import Media from './media.js';
import './playlist.css';

class Playlist extends React.Component {
    render (){
        console.log(this.props.data);
        const playlist = this.props.data.categories[0].playlist;
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
}

export default Playlist;