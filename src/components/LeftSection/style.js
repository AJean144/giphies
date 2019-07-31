import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardButton: {
    margin: '0 auto'
  },
  leftSection: {
    padding: '16px 44px 54px 16px',
    borderBottom: '2px solid #C1C1C1',
  },
  leftBottomSection: {
    backgroundColor: '#F1F1F1',
    padding: 24
  },
  italic: {
    fontStyle: 'italic',
  },
}));

export default useStyles;