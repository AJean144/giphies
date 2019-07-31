import React, { useState } from 'react';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { fetchGifs } from '../../actions/gifsActions';

const Search = ({ fetchGifs }) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  const handleOnChange = event => setQuery(event.target.value);
  const handleOnClick = () => {
    fetchGifs(query)
    setQuery('')
  }
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      fetchGifs(query)
      setQuery('')
    }
  }

  return (
    <Paper className={classes.root}>
      <InputBase
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
    </Paper>
  );
}

export default connect(null, { fetchGifs })(Search);