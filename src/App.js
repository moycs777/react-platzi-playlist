import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './components/media/playlist';
import data from '../src/api.json';
import HomeLayout from './home/home';

class App extends Component {
  render() {
    return (
      <HomeLayout>
        ola k ase
      </HomeLayout>
      
    );
  } 
}

export default App;
/*
  <div>
        <div className="container App">
          <h1>Hola</h1>
          <Playlist data ={data} />
        </div>
      </div>
*/