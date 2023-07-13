import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ImageSwipeComp({
    imageList = [],
    itemName = ''
}) {
    return (
        <Card>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {imageList.map((item) => (
                            <SwiperSlide >
                                <Card sx={12}>
                                <CardMedia sx={12}
                                    component="img"
                                    image={`${item.img}?w=248&fit=crop&auto=format`}
                                    title={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom fontSize={12} component="div">
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>
            </Grid>
        </Card>
    );
}


export default ImageSwipeComp;
