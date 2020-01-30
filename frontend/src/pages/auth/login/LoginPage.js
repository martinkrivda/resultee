import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';

import { Copyright } from '../../../atoms';
import { Field, CheckBox } from '../../../organisms';
import { useAuth, useRequest, translatedValidations } from '../../../utils';
import PATHNAMES from '../../../pathnames';
import ENDPOINTS from '../../../endpoints';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const LoginPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const { signin } = useAuth();
  const loginState = useRequest();

  const onSuccess = useCallback(
    ({ data: { user, token, privileges } }) => {
      signin({ user, token, privileges });
      history.push(PATHNAMES.home());
    },
    [signin, history],
  );

  const onSubmitMemoized = useCallback(
    ({ email, password, remember }) => {
      loginState.request(ENDPOINTS.login(), {
        method: 'POST',
        onSuccess,
        data: { email, password, remember },
      });
    },
    [loginState, onSuccess],
  );

  const { object, requiredString, requiredEmail } = translatedValidations(t);

  const schema = object({
    email: requiredEmail,
    password: requiredString,
  });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{ email: '', password: '', remember: false }}
            validationSchema={schema}
            onSubmit={onSubmitMemoized}
          >
            <Form className={classes.form}>
              <Field
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Field
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <CheckBox
                value="remember"
                name="remember"
                id="remember"
                color="primary"
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href={PATHNAMES.passwordReset()} variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={PATHNAMES.signUp()} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </Form>
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
};
