import React from 'react';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { HeaderBase } from '../molecules/HeaderBase';
import { TextWithTooltip } from '../atoms';
import PATHNAMES from '../pathnames';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export const NotLoggedInHeader = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <HeaderBase homeLinkTo={PATHNAMES.login()}>
      <Hidden xsDown>
        <Button
          href={PATHNAMES.login()}
          color="primary"
          variant="outlined"
          className={classes.link}
        >
          {t('Organisms.NotLoggedInHeader.LoginLink')}
        </Button>
        <Button href={PATHNAMES.signUp()} color="primary" variant="contained">
          {t('Organisms.NotLoggedInHeader.RegisterLink')}
        </Button>
      </Hidden>
      <Hidden smUp>
        <TextWithTooltip
          text={t('Organisms.NotLoggedInHeader.LoginLink')}
          label="Login"
        >
          <IconButton
            href={PATHNAMES.login()}
            color="inherit"
            aria-label="Login"
            edge="start"
            className={classes.menuButton}
          >
            <AccountCircleIcon />
          </IconButton>
        </TextWithTooltip>
      </Hidden>
    </HeaderBase>
  );
};
