import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { CheckCircle, NearMeOutlined, LocalShipping, MoreVert, KeyboardArrowDown } from '@material-ui/icons';
import './style.css';

const Delivery = ( { date, from, to, price, inCharge } ) => {
    return(
        <Grid container className="delivery-container">
            <Grid container alignItems='center' justify='center' xs={2}>
                    <CheckCircle className="check"
                        nativeColor='#EE8D38' />
            </Grid>
            <Grid container xs={10} className="delivery-data">
                <Grid container alignItems='center' xs={1}>
                    <span className="color-text2">{ date }</span>
                </Grid>
                <Grid container alignItems='center' justify='center' xs={4}>
                    <Grid item  xs={4}>
                        <NearMeOutlined nativeColor='#CFCFCF' className="arrow" />
                    </Grid>
                    <Grid item xs={8}>
                        <div>
                            <span className="color-text1">{ from }</span>
                        </div>

                        <div>
                            <KeyboardArrowDown nativeColor='#EE8D38' className="arrow-down" />
                        </div>

                        <div>
                            <span className="color-text1">{ to }</span>
                        </div>
                    </Grid>
                </Grid>
                <Grid container alignItems='center' justify='center' xs={6}>
                    <Grid item   xs={4}>
                        <LocalShipping nativeColor='#858585' className="truck" />
                    </Grid>
                    <Grid item xs={4}>
                        <span className="price color-text1">{ price }</span>
                    </Grid>
                    <Grid container alignItems='center' justify='center' xs={2}>
                        <Grid container alignItems='center' justify='center' className="in-charge">
                            <span>{ inCharge }</span>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <MoreVert nativeColor='#858585' className="options" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

}

Delivery.prototype = {
    
    date: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    inCharge: PropTypes.number.isRequired,
}

export default Delivery;