import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import { NotLoggedInPageLayout } from '../../../templates';
import { useFetchData } from './hooks';
import { Card, CardHeader, CardBody } from '../../../atoms';
import { ResultsTable } from '../../../organisms';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 3),
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    position: 'relative',
    justifyContent: 'center',
  },
  alert: {
    margin: theme.spacing(0, 3),
  },
  category: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  table: {
    minWidth: 650,
  },
  row: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    maxHeight: 500,
  },
  break: {
    display: 'inline-block',
    flexBasis: 100,
    height: 0,
  },
  panel: {
    width: '100%',
  },
}));

export const EventDetail = () => {
  const { eventDetailState, eventClassesState } = useFetchData();

  const errorList = [{ id: 1, error: eventDetailState.error }];

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <NotLoggedInPageLayout errorList={errorList}>
      {eventDetailState.isLoading && (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      )}
      {eventDetailState.data && (
        <>
          <CompetitionInfo
            data={eventDetailState.data}
            classes={classes}
          ></CompetitionInfo>
          <Box className={classes.break}></Box>
          {eventClassesState.isLoading && (
            <div className={classes.root}>
              <CircularProgress />
            </div>
          )}
          {eventClassesState.data &&
            (eventClassesState.data.classes.length < 1 ? (
              <div className={classes.alert}>
                <Alert severity="warning">Classes are not defined yet!</Alert>
              </div>
            ) : (
              <div className={classes.category}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Classes"
                  className={classes.tabs}
                >
                  {eventClassesState.data.classes.map((category, i) => (
                    <Tab label={category.className} key={i} {...a11yProps(i)} />
                  ))}
                </Tabs>
                {eventClassesState.data.classes.map((category, i) => (
                  <TabPanel value={value} index={i} key={i}>
                    <ResultsTable classId={category.className}></ResultsTable>
                  </TabPanel>
                ))}
              </div>
            ))}
        </>
      )}
    </NotLoggedInPageLayout>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <Typography
      className={classes.panel}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const CompetitionInfo = props => (
  <div className={props.classes.root}>
    <Card>
      <CardHeader color="info">
        <Typography
          variant="h3"
          component="h3"
          className={props.classes.cardTitle}
        >
          {props.data.name}
        </Typography>
      </CardHeader>
      <CardBody>
        <Typography variant="h6" component="h6">
          {props.data.organizer} / {props.data.date}
        </Typography>
      </CardBody>
    </Card>
  </div>
);
