import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleStartOver } from '../../actions/gifsActions';
import useStyles from './styles';

const Results = ({ likedGifs, handleStartOver }) => {
  const classes = useStyles();

  const getWeirdnessScore = () => {
    let totalScore = 0;
    for (let key in likedGifs) {
      totalScore += likedGifs[key].weirdnessLevel
    }
    const averageScore = (totalScore / 5);
    return Math.round(averageScore);
  }

  let allLikedGifsDisplay = [];
  for (let key in likedGifs) {
    allLikedGifsDisplay.unshift(
      <Grid item key={likedGifs[key].id} xs={6} sm={2} md={2}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={likedGifs[key].id ? likedGifs[key].images.downsized.url : ''}
            title={likedGifs[key].title ? likedGifs[key].title : 'Search for a GIF'}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom align='center' variant="h6" component="h6">
              {`${likedGifs[key].weirdnessLevel}/10`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  return (
    <Grid>
      <Grid className={classes.scoreSummary}>
        <Container maxWidth="sm">
          <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
            You scored {getWeirdnessScore()} out of 10 on the weirdness scale!
            </Typography>
        </Container>
      </Grid>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
          The Gifs you liked
          </Typography>
        <br />
        <Grid container spacing={4} justify="center">
          {allLikedGifsDisplay}
        </Grid>
        <Grid className={classes.buttons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleStartOver}>
                <Link to='/' className={classes.removeLinkUnderline}>Start Over</Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

const mapStateToProps = state => {
  const { likedGifs } = state;

  return likedGifs;
}

export default connect(mapStateToProps, { handleStartOver })(Results);