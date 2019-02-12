import React from 'react';

import { Grid, Button }from '@material-ui/core';
import SearchComponent from '../../shared/search';
import './style.css';

class Status extends React.Component {

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
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <h4 className="titleStatus"> Status </h4>
                </Grid>
                <Grid item xs={12}>
                    <SearchComponent searchKey={searchKey} handleSearchChange={this.handleSearchChange} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" size="large" className="btnStatus">
                        DELIVERED
                    </Button>
                </Grid>
            </Grid>);
    }
}

export default Status;