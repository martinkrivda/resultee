import React, { useEffect, useState, useCallback } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import { Copyright } from '../../../atoms';
import { Field } from '../../../organisms';
import { useRequest, translatedValidations } from '../../../utils';
import ENDPOINTS from '../../../endpoints';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const PasswordReset = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const resetPasswordState = useRequest();
  const [emailSentState, setEmailSentState] = useState('');

  useEffect(() => {
    if (resetPasswordState.isLoading) {
      setEmailSentState('');
    }
  }, [resetPasswordState.isLoading]);

  const onSubmitMemoized = useCallback(
    ({ email }, { resetForm }) => {
      resetPasswordState.request(ENDPOINTS.resetPassword(), {
        method: 'POST',
        onSuccess: ({ data: { email } }) => {
          resetForm();
          setEmailSentState(t('Page.ResetPassword.EmailSent', { email }));
        },
        data: { email },
      });
    },
    [resetPasswordState, t],
  );

  const { object, requiredEmail } = translatedValidations(t);
  const schema = object({
    email: requiredEmail,
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('Page.Auth.PasswordReset.FormHeading')}
        </Typography>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={schema}
          onSubmit={onSubmitMemoized}
        >
          <Form className={classes.form}>
            <Grid container spacing={2}>
              <Field
                variant="outlined"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={resetPasswordState.isLoading}
            >
              {t('Page.Auth.PasswordReset.ResetPassword')}
            </Button>
          </Form>
        </Formik>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
