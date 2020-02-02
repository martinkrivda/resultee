import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import PATHNAMES from '../pathnames';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    textDecoration: 'none',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export const HeaderBase = ({ homeLinkTo, children }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link color="inherit" href={homeLinkTo}>
            Resultee
          </Link>
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            href={PATHNAMES.home()}
            className={classes.link}
          >
            Home
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href={PATHNAMES.results()}
            className={classes.link}
          >
            Results
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Support
          </Link>
        </nav>
        {children}
      </Toolbar>
    </AppBar>
  );
};
