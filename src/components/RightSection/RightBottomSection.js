import React from 'react';
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const RightBottomSection = ({ likedGifs }) => {
  const classes = useStyles();

  const getHowManyLeft = (gifsLength) => {
    const amountLeft = 5 - gifsLength;
    const pluralOrSingular = amountLeft === 1 ? '' : 's';
    return (
      <Typography className={classes.youMustMessage}>
        You must <span className={classes.italic}>Like</span> {amountLeft} more GIF{pluralOrSingular} to calculate your score
      </Typography>
    )
  }

  let allLikedGifsDisplay = [];
  for (let key in likedGifs) {
    allLikedGifsDisplay.unshift(
      <Grid item key={likedGifs[key].id} xs={12} sm={6} md={6}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={likedGifs[key].id ? likedGifs[key].images.downsized.url : ''}
            title={likedGifs[key].title ? likedGifs[key].title : 'Search for a GIF'}
          />
          <CardActions className={classes.cardButton}>
            <Button variant="contained" color="primary">
              Unlike
        </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
          {allLikedGifsDisplay}
        </Grid>
      </Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <Button variant="contained" color="primary">
          Calculate My Weirdness Score
      </Button>
        {getHowManyLeft(allLikedGifsDisplay.length)}
      </Grid>
    </>
  )
}

const mapStateToProps = state => {
  const { likedGifs } = state;

  return {
    likedGifs: likedGifs.likedGifs
  }
}

export default connect(mapStateToProps)(RightBottomSection);