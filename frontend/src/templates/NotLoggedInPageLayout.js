import React from 'react';

import { NotLoggedInHeader } from '../organisms';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { NoContainerSectionWithErrorBox, CopyrightWithBox } from '../molecules';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export const NotLoggedInPageLayout = ({ children, errorList }) => {
  const classes = useStyles();
  return (
    <>
      <NotLoggedInHeader />

      <NoContainerSectionWithErrorBox
        errorList={errorList || []}
        className="notLoggedBackground p-5"
      >
        <div>
          <Container fixed component="main" className={classes.heroContent}>
            {children}
          </Container>
          <CopyrightWithBox />
        </div>
      </NoContainerSectionWithErrorBox>
    </>
  );
};
