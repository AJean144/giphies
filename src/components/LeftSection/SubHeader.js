import React from 'react';
import useStyles from './style';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Search from '../Search';

const SubHeader = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.leftSection}>
      <Typography>
        Find out how weird you are by selecting the GIFs that make you laugh. We'll show you the latest weird ones to start, but you can move the slider to make them weirder.
        </Typography>
      <br />
      <Typography>
        When you find a GIF you like, press the <span className={classes.italic}>Like</span> button. Once you like 5 GIFs, we'll show you how weird you are.
        </Typography>
      <br />
      <Grid container direction="row" justify="center" alignItems="center">
        <Search />
      </Grid>
    </Grid>
  )
}

export default SubHeader;