import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
    state = {
        author: 'Moises'
    }
    
    handleClick = (event) => {
        // console.log(this.props.image)
    }
    render() {
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            <div className="Media" >
                <p>Media component</p> 
                <p>{this.props.title}</p> 
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;