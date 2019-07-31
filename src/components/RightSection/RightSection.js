import React from 'react';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RightBottomSection from './RightBottomSection';

const RightSection = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={5}>
      <Box height="100%" bgcolor="grey.200" className={classes.rightSection} mx={0.5} display="inline-block">
        <Typography variant="h6" gutterBottom>Your Liked GIFS</Typography>
        <RightBottomSection />
      </Box>
    </Grid>
  )
}

export default RightSection;