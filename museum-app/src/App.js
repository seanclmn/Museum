import React, {useState} from 'react'
import {Route} from 'react-router-dom'

import Header from './components/Main/Header.jsx'
import Home from './components/Main/Home.jsx'

import Met from './components/Museums/Met.jsx'
import MetSearch from './components/Museums/Met/MetSearch.jsx'
import DepartmentSearch from './components/Museums/Met/DepartmentSearch.jsx'
import DepartmentSelect from './components/Museums/Met/DepartmentSelect.jsx'
import './App.css';

function App() {
  const[image,setImage]=useState("./met.jpeg")
  const[museum,setMuseum]=useState("The Met")
  return (
    <div className="App">

      <header>
        <Header setImage={setImage} setMuseum={setMuseum}/>
      </header>

      <div>
        
        <Route exact path='/met' component={Met}/>
        <Route exact path='/met/search' render={(props)=><MetSearch department={""}/>}/>
        <Route exact path='/met/department/:number' render={(routerProps)=><DepartmentSearch match={routerProps.match}/>}/>
        <Route exact path='/met/department' component={DepartmentSelect}/>
        <Route exact path='/' render={(props)=><Home image={image} museum={museum}/>}/>
      </div>
    </div>

  );
}

export default App;
