import React from 'react';
import PropTypes from 'prop-types';

import { TextField, InputAdornment } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

const SearchComponent = ({ searchKey,handleSearchChange, fullWidth= false }) => {
    return(
        <TextField
        id="outlined-search"
        className="search"
        label="Search"
        type="search"
        margin="normal"
        variant="outlined"
        value={searchKey}
        name='searchKey'
        fullWidth={fullWidth}
        onChange={handleSearchChange}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
    );
}

Search.propTypes = {
    searchKey: PropTypes.string,
    handleSearchChange: PropTypes.func,
    fullWidth: PropTypes.bool,
}

export default SearchComponent;
