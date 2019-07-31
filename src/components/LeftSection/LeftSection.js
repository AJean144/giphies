import React from 'react';
import Grid from '@material-ui/core/Grid';
import SubHeader from './SubHeader';
import LeftBottomSection from './LeftBottomSection';

const LeftSection = () => (
  <Grid item xs={12} sm={7}>
    <SubHeader />
    <LeftBottomSection />
  </Grid>
)

export default LeftSection;