import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { notify } from '../../actions/gifsActions';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const MySnackbarContentWrapper = (props) => {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

const SnackbarType = props => {
  const classes = useStyles2();
  const { type, message, onClose } = props;
  switch (type) {
    case 'success':
      return (
        <MySnackbarContentWrapper
          variant="success"
          className={classes.margin}
          message={message}
          onClose={onClose}
        />
      )
    case 'error':
      return (
        <MySnackbarContentWrapper
          variant="error"
          className={classes.margin}
          message={message}
          onClose={onClose}
        />
      )
    case 'warning':
      return (
        <MySnackbarContentWrapper
          variant="warning"
          className={classes.margin}
          message={message}
          onClose={onClose}
        />
      )
    case 'info':
      return (
        <MySnackbarContentWrapper
          variant="info"
          className={classes.margin}
          message={message}
          onClose={onClose}
        />
      )
    default:
      return (
        <MySnackbarContentWrapper
          variant="info"
          className={classes.margin}
          message="This is an information message!"
          onClose={onClose}
        />
      );
  }
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const NotificationSnackbars = ({ notificationType, notificationState, notificationMessage }) => {
  const [open, setOpen] = useState(false);

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    notify(false, 'info');
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={notificationState}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <SnackbarType type={notificationType} message={notificationMessage} onClose={handleClose} />
      </Snackbar>
    </>
  );
}

const mapStateToProps = state => {
  const { likedGifs: { notificationState } } = state;
  const {
    notification: {
      notificationType,
      notificationMessage,
    }
  } = state;

  return {
    notificationType,
    notificationState,
    notificationMessage,
  }
}

export default connect(mapStateToProps)(NotificationSnackbars);