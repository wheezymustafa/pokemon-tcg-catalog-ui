import { Checkbox, FormControlLabel, Grid, Typography, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import { upperCase } from 'lodash';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    filterTitle: {
        textTransform: "capitalize",
        fontWeight: "bold",
        textAlign: "center"
    },
    filterBar: {
        width: '100%'
    }
}));

const Filters = ({ filters, onFilterSelected }) => {
    const classes = useStyles()
    const generateFilterCheckboxes = () => {
        let filterArr = []
        for (var filter of Object.keys(filters)) {
            filterArr.push(
                <Grid container item>
                    <Box className={classes.filterBar} border={1} borderColor="grey.500" borderRadius={16} >
                        <Typography className={classes.filterTitle} >{filter}</Typography>

                        {filters[filter].map(filterValue => {
                            return (
                                <Grid item xs={12}>
                                <Box paddingLeft="10px" >
                                    <FormControlLabel label={filterValue.key}
                                        control={<Checkbox key={filterValue.key} name={filterValue.key} checked={filterValue.selected} onChange={onFilterSelected} inputProps={{ filtertype: filter }} />} />
                                </Box>
                                </Grid>)
                                
                        })}
                    </Box>
                </Grid>

            )
        }
        return filterArr
    }

    return (
        <Grid container justify="center">
            <Typography className={classes.filterTitle} >Filter by: </Typography>
            {generateFilterCheckboxes()}
        </Grid>
    );
};

export default Filters;