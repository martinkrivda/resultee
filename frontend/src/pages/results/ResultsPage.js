import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';

import { NotLoggedInPageLayout } from '../../templates';
import PATHNAMES from '../../pathnames';
import { useFetchData } from './hooks';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    position: 'relative',
    justifyContent: 'center',
  },
  table: {
    minWidth: 650,
  },
  row: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
}));

export const ResultsPage = () => {
  const { eventListState } = useFetchData();

  const errorList = [{ id: 1, error: eventListState.error }];

  const classes = useStyles();

  return (
    <NotLoggedInPageLayout errorList={errorList}>
      {eventListState.isLoading && (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      )}
      {eventListState.data && (
        <LayoutedEvents eventList={eventListState.data} />
      )}
    </NotLoggedInPageLayout>
  );
};

const LayoutedEvents = ({ eventList }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Datum</TableCell>
              <TableCell>Název</TableCell>
              <TableCell>Organizátor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventList.competitions
              .filter(({ date }) => new Date(date) - new Date() > 0)
              .map(row => (
                <TableRow
                  hover
                  component="a"
                  onClick={() =>
                    history.push(PATHNAMES.getCompetitionDetail(row.id))
                  }
                  key={row.id}
                  className={classes.row}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.organizer}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
