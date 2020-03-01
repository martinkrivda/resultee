import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '20px',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const ErrorBox = ({ errorList }) => {
  const classes = useStyles();
  const filteredErrorList = errorList.filter(
    ({ error }) => typeof error !== 'undefined' && error !== null,
  );
  const { t } = useTranslation();

  return (
    filteredErrorList.length !== 0 && (
      <div className={classes.root}>
        <Alert severity="error">
          <AlertTitle>{t('Atoms.Error.ErrorTitle')}</AlertTitle>
          {filteredErrorList.map(({ error, id }) => (
            <div key={id}>{error}</div>
          ))}
        </Alert>
      </div>
    )
  );
};
