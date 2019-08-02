import React from 'react';
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const cards = [1, 2, 3, 4];

const RightBottomSection = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image=""
                  title="GIF title"
                />
                <CardActions className={classes.cardButton}>
                  <Button variant="contained" color="primary">
                    Unlike
                </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <Button variant="contained" color="primary">
          Calculate My Weirdness Score
      </Button>
        <Typography className={classes.youMustMessage}>You must <span className={classes.italic}>Like</span> 1 more GIF to calculate your score</Typography>
      </Grid>
    </>
  )
}

export default RightBottomSection;