import React from "react";
import { Card, Grid, ImageList, ImageListItem, Typography } from "@mui/material";

function ImageListComp({
    itemData = '',
    itemName = ''
}) {
    return (
        <Card>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h6' component='div'>
                        Photos from {itemName}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ImageListComp