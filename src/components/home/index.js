import React from 'react';

import SearchComponent from '../shared/search';
import { Grid } from '@material-ui/core';
import Delivery from './delivery';
import data from '../../Constant/data';
import { AddCircle } from '@material-ui/icons';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            searchKey: '',
        }
    }

    handleSearchChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    render(){
        const { searchKey } = this.state;

        return(
        <Grid container className="container-home">
            <Grid item xs={7}></Grid>
            <Grid container justify='flex-end' xs={5}>
                <SearchComponent searchKey={searchKey} handleSearchChange={this.handleSearchChange}  />
            </Grid>
            <Grid item xs={12}>
               { 
                   data.map( (elem,idx) => (
                        <Delivery key={idx} date={elem.date} from={elem.from} to={elem.to} price={elem.price} inCharge={elem.inCharge} /> 
                    )) 
               }
            </Grid>
            <div className="add-container">
                <AddCircle className="add" nativeColor='#EE8D38' />
            </div>
            
        </Grid>);
    }
}

export default Home;