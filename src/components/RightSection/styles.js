import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardButton: {
    margin: '0 auto'
  },
  rightSection: {
    backgroundColor: '#E1E1E1',
    padding: 16,
    borderLeft: '2px solid #C1C1C1',
  },
  italic: {
    fontStyle: 'italic',
  },
  youMustMessage: {
    color: '#AE4345',
    marginTop: 16
  }
}));

export default useStyles;