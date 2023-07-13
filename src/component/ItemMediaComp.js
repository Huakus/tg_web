import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ItemMediaComp({
    mediaType='img',
    mediaSource='',
    mediaAltText='',
    contentText=''
}) {
    return (
        <Card>
            <CardMedia
                component={mediaType}
                image={mediaSource}
                alt={mediaAltText}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {contentText}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ItemMediaComp