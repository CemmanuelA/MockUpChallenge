import React from 'react';


import Grid from '@material-ui/core/Grid';
import ShoppingCart from '@material-ui/icons/ShoppingCartTwoTone';
import CalendarToday from '@material-ui/icons/CalendarTodayTwoTone';
import FavoriteBorder from '@material-ui/icons/FavoriteBorderTwoTone';
import Switch from '@material-ui/core/Switch';


import './style.css';


class SmartsFilters extends React.Component {

    constructor(){
        super();
        this.state= {
            checkShopping: false,
            checkCalendar: false,
            checkFavorite: false,
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
   
    render(){

        const { checkCalendar, checkFavorite, checkShopping } = this.state;
        return(
            <Grid container>
                <Grid item xs={12}>
                    <h4 className="title" >Smart Filters</h4>
                </Grid>
                
                <Grid container>
                    <Grid item xs={8} style={{fontSize: 50}}>
                        <ShoppingCart nativeColor='#686868' fontSize={'inherit'} />
                    </Grid>
                    <Grid item xs={4}>
                        <Switch checked={checkShopping}
                        onChange={this.handleChange('checkShopping')} color={'primary'} />
                    </Grid>
                </Grid>
    
                <Grid container>
                    <Grid item xs={8} style={{fontSize: 50}}>
                        <CalendarToday nativeColor='#686868' fontSize={'inherit'} />
                    </Grid>
                    <Grid item xs={4}>
                        <Switch checked={checkCalendar}
                        onChange={this.handleChange('checkCalendar')} color={'primary'} />
                    </Grid>
                </Grid>
    
                <Grid container>
                    <Grid item xs={8} style={{fontSize: 50}}>
                        <FavoriteBorder nativeColor='#686868' fontSize={'inherit'} />
                    </Grid>
                    <Grid item xs={4}>
                        <Switch checked={checkFavorite}
                        onChange={this.handleChange('checkFavorite')} color={'primary'} />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default SmartsFilters;