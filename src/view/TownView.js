import React from "react";
import {Card, Grid} from "@mui/material";
import ItemComp from "../component/ItemComp";

function TownView() {
  const town = {
    uuid: "fb79df12-7bcc-4885-9504-044b94451b09",
    createdAt: "2023-07-09T16:36:25.415215",
    updatedAt: "2023-07-09T16:36:25.415215",
    name: "San Marco d'Alunzio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    latitude: 2.0,
    longitude: 3.0,
    province: {
      uuid: "5af15b98-5bda-4f27-8233-d9aace598489",
      createdAt: "2023-07-09T16:36:16.012345",
      updatedAt: "2023-07-09T16:36:16.012345",
      name: "Palermo",
      country: "ITALY"
    }
  }

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

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ItemComp
            itemName={town.name}
            province={town.province.name}
            country={town.province.country}
            description={town.description}
            itemImageList={itemImageList}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default TownView;
