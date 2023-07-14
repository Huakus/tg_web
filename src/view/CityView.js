import React, { useState, useEffect } from "react";
import {Card, Grid} from "@mui/material";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import ItemComp from "../component/item/ItemComp";

function CityView() {
  const { cityId } = useParams(); // Get the townId from the route parameters

  const [city, setCity] = useState({});

  const itemImageList = [
    {
        "img": "http://www.comune.sanmarcodalunzio.me.it/images/stories/doc2.png",
        "title": "primera foto"
    },

    {
      "img": "http://www.comune.sanmarcodalunzio.me.it/images/phocagallery/sanmarco/thumbs/phoca_thumb_l_Immagine8.jpg",
      "title": "segunda foto"
    }
  ]

  useEffect(() => {
    // Fetch town data
    fetch(`http://localhost:8011/api/v1/city/${cityId}`)
      .then(response => response.json())
      .then(data => {
          console.log(data); // Log fetched town data
          setCity(data);
      })
      .catch(error => console.error(error));
}, [cityId]);


  return (
    city && itemImageList && // Ensure town and itemImageList are loaded before rendering ItemComp
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ItemComp
            itemName={city?.name}
            province={city?.province?.name}
            country={city?.province?.country}
            description={city?.description}
            itemImageList={itemImageList}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default CityView;