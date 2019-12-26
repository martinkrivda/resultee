import React from 'react';
import Button from '@material-ui/core/Button';
import { HeaderBase } from '../molecules/HeaderBase';
import PATHNAMES from '../pathnames';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export const NotLoggedInHeader = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <HeaderBase homeLinkTo={PATHNAMES.login()}>
      <Button
        href={PATHNAMES.login()}
        color="primary"
        variant="outlined"
        className={classes.link}
      >
        {t('Organisms.NotLoggedInHeader.LoginLink')}
      </Button>
      <Button href="#" color="primary" variant="contained">
        {t('Organisms.NotLoggedInHeader.RegisterLink')}
      </Button>
    </HeaderBase>
  );
};
