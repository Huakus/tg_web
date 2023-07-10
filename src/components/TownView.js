import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TownView() {
  const town = {
    "uuid": "fb79df12-7bcc-4885-9504-044b94451b09",
    "createdAt": "2023-07-09T16:36:25.415215",
    "updatedAt": "2023-07-09T16:36:25.415215",
    "name": "San Marco d'Alunzio",
    "description": "Pueblo de montaña 2",
    "latitude": 2.0,
    "longitude": 3.0,
    "province": {
        "uuid": "5af15b98-5bda-4f27-8233-d9aace598489",
        "createdAt": "2023-07-09T16:36:16.012345",
        "updatedAt": "2023-07-09T16:36:16.012345",
        "name": "Palermo",
        "country": "ITALY"
    }
  };
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          {town.name}
        </Typography>
        <Typography color="textSecondary">
          {town.description}
        </Typography>
        <Typography>
          Latitude: {town.latitude}
        </Typography>
        <Typography>
          Longitude: {town.longitude}
        </Typography>
        <Typography variant="h6">
          Province: {town.province.name}
        </Typography>
        <Typography color="textSecondary">
          Country: {town.province.country}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TownView;
