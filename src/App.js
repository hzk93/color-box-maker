import React, { Component } from 'react';
import './App.css'
// simport NewBoxForm from './NewBoxForm';
import Box from './Box';
import BoxList from './BoxList';

class App extends Component{
  render(){
    return(
    <div>
      <BoxList/>
      <Box/>
    </div>
    )
  }
}

export default App;