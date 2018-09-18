import React, { Component } from 'react';
import './App.css';
import data from '../src/api.json';
import HomeLayout from './home/home';
import Categories from './categories/components/categories';
import Related from './home/related';
import ModalContainer from './widgets/container/modal';
import Modal from './widgets/components/modal';

class App extends Component {
  state = {
    modalVisible:false,
  }
  handleOpenModal = () => {
    this.setState({
      modalVisible:true
    })
  }
  handleCloseModalClick = (event)=>{
    this.setState({
      modalVisible:false,
    })
  }
  render() {
    return (
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
              <h1>esto es un portal</h1>
            </Modal>
          </ModalContainer>       
        }
      </HomeLayout>
    );
  } 
}

export default App;
