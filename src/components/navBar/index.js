import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeOutlined, EmailOutlined, StarRate, Settings, Person } from '@material-ui/icons'
import { Grid } from '@material-ui/core';
import Home from '../home';
import Messages from '../messages';
import Wishlist from '../wishlist';
import Configuration from '../configuration';
import MyAccount from '../myAccount';
import './style.css';

class NavBar extends React.Component {

  constructor(){
    super();
    this.state = {
      linkSelected: 'home'
    }
  }

  handleClick = name =>{
    this.setState({ linkSelected: name });
  }

  render(){

    const { linkSelected } = this.state;
    return(
      <Router>
        <Grid container direction='column'>

          <Grid container  justify='center' className="list">

            <Grid item className={linkSelected === 'home' ? "item-list item-list-active" : "item-list" } xs>
              <Link to="/" className="link" onClick={() => this.handleClick('home')}>
                <HomeOutlined  fontSize='large'/>
                <p className="text" >Home</p>
              </Link>
            </Grid>

            <Grid item className={linkSelected === 'messages' ? "item-list item-list-active" : "item-list" } xs>
              <Link to="/messages" className="link" onClick={() => this.handleClick('messages')}>
                <EmailOutlined fontSize='large' />
                <p className="text" >Messages</p>
              </Link>
            </Grid>

            <Grid item className={linkSelected === 'wishlist' ? "item-list item-list-active" : "item-list" } xs>
              <Link to="/wishlist" className="link" onClick={() => this.handleClick('wishlist')}>
                <StarRate fontSize='large' />
                <p className="text" >Wishlist</p>
              </Link>
            </Grid>

            <Grid item className={linkSelected === 'settings' ? "item-list item-list-active" : "item-list" } xs>
              <Link to="/settings" className="link" onClick={() => this.handleClick('settings')}>
                <Settings fontSize='large' />
                <p className="text" >Settings</p>
              </Link>
            </Grid>

            <Grid item className={linkSelected === 'my_account' ? "item-list item-list-active" : "item-list" } xs>
              <Link to="/my_account" className="link" onClick={() => this.handleClick('my_account')}>
                <Person fontSize='large' />
                <p className="text" >My Account</p>
              </Link>
            </Grid>

          </Grid>

            <Route exact path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/settings" component={Configuration} />
            <Route path="/my_account" component={MyAccount} />

        </Grid>
      </Router>
    );
  }
};

export default NavBar;