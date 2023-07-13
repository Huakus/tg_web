import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function MyComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardMedia
            component="img"
            image="https://tta-tta-go.s3.amazonaws.com/uploads/photo/photo_file/2459/big_chiesa-di-santa-maria-delle-grazie-cosa-vedere-a-san-marco-d-alunzio-nebrodi-sicilia-ttatta-go.jpg"
            alt="Church of Santa Maria delle Grazie - San Marco d'Alunzio"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              AMV Idealab s.r.l. / ttattago.com / Antonino Bartuccio © 2020
            </Typography>
          </CardContent>
        </Card>

        {/* Add Trustpilot widget here */}
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h1">Church of Santa Maria delle Grazie - San Marco d'Alunzio</Typography>

            <Typography variant="body1">
              <Link href="/en/cosa-vedere/san-marco-d-alunzio/points">San Marco D'alunzio</Link>
            </Typography>
            <Typography variant="body1">Sicilia</Typography>

            <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>

            <Typography variant="body2">Share</Typography>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
            {/* Add the rest of the sharing icons here */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default MyComponent;
