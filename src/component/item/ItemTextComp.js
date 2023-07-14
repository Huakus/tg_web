import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import LocationComp from "../LocationComp";

function ItemTextComp({
    title='',
    titleVariant='h5',
    place='',
    city='',
    province='',
    country='',
    description='',
    descriptionVariant='p'
}) {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant={titleVariant} component='div'>
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <LocationComp
                    place={place}
                    city={city}
                    province={province}
                    country={country}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant={descriptionVariant} component='div'>
                    {description}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ItemTextComp





