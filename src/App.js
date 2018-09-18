import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './components/media/playlist';
import data from '../src/api.json';
import HomeLayout from './home/home';
import Categories from './categories/components/categories';

class App extends Component {
  render() {
    //console.log("app js , data: " + JSON.stringify(data.categories));
    return (
      <HomeLayout>
        <Categories categories={data.categories} />        
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