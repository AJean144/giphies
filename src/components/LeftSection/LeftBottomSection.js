import React from 'react';
import useStyles from './style';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Slider from '../Slider';

const LeftBottomSection = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.leftBottomSection}>
      <Typography variant="h6" gutterBottom>Your Result</Typography>
      <Container maxWidth="sm">
        <Typography align="center" color="textPrimary" gutterBottom>
          GIF Title
        </Typography>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image=""
            title="GIF title"
          />
          <CardActions className={classes.cardButton}>
            <Button variant="contained" color="primary">
              <ThumbUpIcon className={classes.rightIcon} />
            </Button>
          </CardActions>
        </Card>
      </Container>
      <br />
      <Slider />
    </Grid>
  )
}

export default LeftBottomSection;