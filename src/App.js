import React, { Component } from 'react';
import './App.css';
import data from '../src/api.json';
import HomeLayout from './home/home';
import Categories from './categories/components/categories';
import Related from './home/related';
import ModalContainer from './widgets/container/modal';
import Modal from './widgets/components/modal';
import HandleError from './error/containers/handle-error';
import VideoPlayerContainer from './player/container/video-player';

class App extends Component {
  state = {
    modalVisible:false,
  }
  handleOpenModal = (media) => {
    console.log("abriendo modal dmedia: " + JSON.stringify(media.src));
    this.setState({
      modalVisible:true,
      media
    })
  }
  handleCloseModalClick = (event)=>{
    this.setState({
      modalVisible:false,
    })
  }
  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related/>
          <Categories 
            categories={data.categories} 
            handleOpenModal={this.handleOpenModal}
          /> 
          {
            this.state.modalVisible &&
            <ModalContainer>       
              <Modal
                handleClick={this.handleCloseModalClick}
              >
                <VideoPlayerContainer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>       
          }
        </HomeLayout>
      </HandleError>
    );
  } 
}

export default App;
