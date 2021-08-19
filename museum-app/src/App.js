import React, {useState} from 'react'
import {Route} from 'react-router-dom'

import Header from './components/Main/Header.jsx'
import Home from './components/Main/Home.jsx'

import Met from './components/Museums/Met.jsx'
import MetSearch from './components/Museums/Met/MetSearch.jsx'
import './App.css';

function App() {
  const[image,setImage]=useState("./met.jpeg")
  return (
    <div className="App">

      <header>
        <Header setImage={setImage}/>
      </header>

      <div>
        
        <Route exact path='/met' component={Met}/>
        <Route exact path='/met/search' component={MetSearch}/>
        <Route exact path='/' render={(props)=><Home image={image} />}/>
      </div>
    </div>

  );
}

export default App;
