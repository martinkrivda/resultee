import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PATHNAMES from './pathnames';
import {
  LoginPage,
  SignUpPage,
  HomePage,
  NotFoundPage,
  PasswordReset,
} from './pages';
import { useAuth, hasPrivilege } from './utils';
export function Routes() {
  return (
    <Switch>
      <Route path={PATHNAMES.empty()} exact component={LoginPage} />
      <Route path={PATHNAMES.login()} exact component={LoginPage} />
      <Route path={PATHNAMES.signUp()} exact component={SignUpPage} />
      <Route path={PATHNAMES.passwordReset()} exact component={PasswordReset} />
      <Route path={PATHNAMES.home()} exact component={HomePage} />

      {/* Not found route */}
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to={PATHNAMES.login()} />
      }
    />
  );
};

const PrivilegePrivateRoute = ({
  component: Component,
  privilege,
  ...rest
}) => {
  const { token, privileges } = useAuth();

  const routeHasPrivilege = hasPrivilege(privileges, privilege);

  return (
    <Route
      {...rest}
      render={props =>
        token && routeHasPrivilege ? (
          <Component privilege={privilege} {...props} />
        ) : (
          <Redirect to={PATHNAMES.login()} />
        )
      }
    />
  );
};
