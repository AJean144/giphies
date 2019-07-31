import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const App = () => (
  <>
    <CssBaseline />
    <Header />
    <Grid container>
      <LeftSection />
      <RightSection />
    </Grid>
  </>
)

export default App;
