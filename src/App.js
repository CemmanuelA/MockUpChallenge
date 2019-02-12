import React, { Component } from 'react';

import SideBar from './components/sideBar';
import { Grid } from '@material-ui/core';
import './App.css';
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <Grid container className="App">

       <Grid item xs={12} md={3}>
         <SideBar />
       </Grid>

       <Grid item xs={12} md={8}>
          <NavBar />
       </Grid>

      </Grid>
    );
  }
}

export default App;
