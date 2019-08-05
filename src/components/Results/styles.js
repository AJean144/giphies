import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    scoreSummary: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    buttons: {
        marginTop: theme.spacing(4),
    },
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
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    removeLinkUnderline: {
        textDecoration: 'none',
        color: '#ffffff'
    }
}));

export default useStyles;