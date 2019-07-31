import React, { useState } from 'react';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const SliderComponent = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
      <Typography id="discrete-slider" align="center" gutterBottom>
        Weirdness {value}
      </Typography>
      <Slider
        defaultValue={0}
        onChange={handleSliderChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
    </Grid>
  );
}

export default SliderComponent;