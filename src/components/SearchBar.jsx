import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import ThermostatIcon from '@mui/icons-material/Thermostat';

export default function CustomizedInputBase(props) {
    return (
        <Box
            component="form"
            onSubmit={props.submit}
            sx={{ p: '2px 5px', display: 'flex', alignItems: 'center', width: '85%', borderBottom: 'solid 2px #707172', margin: 'auto' }}
        >
            <IconButton sx={{ p: '10px', color: 'inherit' }} aria-label="menu">
                <ThermostatIcon />
            </IconButton>
            <InputBase
                onKeyUp={props.onKeyDown}
                onChange={props.change}
                sx={{ ml: 1, flex: 2 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton onClick={props.click} type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Box>
    );
}