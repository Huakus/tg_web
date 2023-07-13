import React from "react";
import { Grid, Typography } from "@mui/material";

function LocationComp({
    place='',
    city='',
    province='',
    country='',
}) {
    return(
        <Grid container spacing={2}>
            <Grid item>
                <Typography fontSize={12} component='div'>
                    {country}
                </Typography>
            </Grid>
            <Grid item>
                <Typography fontSize={14} component='div'>
                    {province}
                </Typography>
            </Grid>
            <Grid item>
                <Typography fontSize={16} component='div'>
                    {city}
                </Typography>
            </Grid>
            <Grid item>
                <Typography fontSize={18} component='div'>
                    {place}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default LocationComp