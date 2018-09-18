import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './components/media/playlist';
import data from '../src/api.json';
import HomeLayout from './home/home';
import Categories from './categories/components/categories';
import Related from './home/related';

class App extends Component {
  render() {
    return (
      <HomeLayout>
        <Related/>
        <Categories categories={data.categories} />        
      </HomeLayout>
    );
  } 
}

export default App;
