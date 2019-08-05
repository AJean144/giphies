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
import { connect } from 'react-redux';
import { likeGif, clearCurrentGifState } from '../../actions/gifsActions';

const LeftBottomSection = ({ gif, likeGif, weirdnessLevel, clearCurrentGifState }) => {
  const classes = useStyles();

  const handleLike = () => {
    likeGif(gif, weirdnessLevel)

    setTimeout(() => {
      clearCurrentGifState()
      likeGif(gif, weirdnessLevel)
    }, 3000)
  }

  return (
    <Grid className={classes.leftBottomSection}>
      <Typography variant="h6" gutterBottom>Your Result</Typography>
      <Container maxWidth="sm">
        <Typography align="center" color="textPrimary" gutterBottom>
          {gif.title ? gif.title : 'Search for a GIF'}
        </Typography>
        {gif.title && (
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={gif.title ? gif.images.downsized.url : ''}
              title={gif.title ? gif.title : 'Search for a GIF'}
            />
            <CardActions className={classes.cardButton}>
              <Button variant="contained" color="primary" onClick={handleLike} disabled={!gif.title}>
                <ThumbUpIcon className={classes.rightIcon} />
              </Button>
            </CardActions>
          </Card>
        )}
      </Container>
      <br />
      {gif.title && <Slider />}
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    ...state.gif,
    weirdnessLevel: state.gif.weirdnessLevel,
  }
};

export default connect(mapStateToProps, { likeGif, clearCurrentGifState })(LeftBottomSection);