import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import ItemTextComp from "./ItemTextComp";
import ImageSwipeComp from "./ImageSwipeComp";

function ItemComp({
    itemName='',
    place='',
    city='',
    province='',
    country='',
    description='',
    itemImageList=[]
}) {
    return (
        <Card>
            <Grid container spacing = {2}>
                <Grid item xs={12} sm={6} md={4}>
                    <ImageSwipeComp itemName={itemName} imageList={itemImageList}/>
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <ItemTextComp
                        title={itemName}
                        place={place}
                        city={city}
                        province={province}
                        country={country}
                        description={description}
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

export default ItemComp;