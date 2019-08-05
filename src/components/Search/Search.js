import React, { useState } from 'react';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { fetchGif } from '../../actions/gifsActions';
import { updateQueryState } from '../../actions/gifsActions';
import { giphifyQueryString } from '../../utils/helpers';
import Notification from '../Notification';
import { Typography, Grid } from '@material-ui/core';

const Search = ({
  weirdnessLevel,
  fetchGif,
  updateQueryState,
  notificationType,
  notificationState,
  notificationMessage,
  likedGifs,
}) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  const handleOnChange = event => setQuery(event.target.value);
  const handleOnClick = () => {
    fetchGif(giphifyQueryString(query), weirdnessLevel)
    updateQueryState(giphifyQueryString(query))
    setQuery('')
  }
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      fetchGif(giphifyQueryString(query), weirdnessLevel)
      updateQueryState(giphifyQueryString(query))
      setQuery('')
    }
  }

  const isLikedGifsAmount5 = Object.keys(likedGifs).length === 5;

  return (
    <Grid>
      <Paper className={classes.root}>
        <InputBase
          disabled={isLikedGifsAmount5}
          value={query}
          className={classes.input}
          placeholder="Search Form"
          inputProps={{ 'aria-label': 'search Form' }}
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
        />
        <Divider className={classes.divider} />
        <IconButton className={classes.iconButton} onClick={handleOnClick} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Notification
          notificationType={notificationType}
          notificationState={notificationState}
          notificationMessage={notificationMessage}
        />
      </Paper>
      {notificationState && <Typography className={classes.errorText}>{notificationMessage}</Typography>}
      {isLikedGifsAmount5 && <Typography className={classes.successText}>You may now calculate your weirdness score!</Typography>}
    </Grid>
  );
}

const mapStateToProps = state => ({
  weirdnessLevel: state.gif.weirdnessLevel,
  notificationType: state.gif.notificationType,
  notificationState: state.gif.notificationState,
  notificationMessage: state.gif.notificationMessage,
  likedGifs: state.likedGifs.likedGifs
});

export default connect(mapStateToProps, { fetchGif, updateQueryState })(Search);