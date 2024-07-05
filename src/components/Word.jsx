import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react'
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  

export const Word = () => {
  return (
     <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
       
    <Card sx={{ minWidth: 270,marginTop: '7%' }}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>

<Grid item xs={12} sm={6}>
  <Card sx={{ minWidth: 270 , marginTop: '7%'}}> 
    <CardContent >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        in{bull}cred{bull}i{bull}ble
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        impossible to believe.
        <br />
        {'"an incredible story"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
</Grid>
</Grid>
);
}
  


    
  

