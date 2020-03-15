import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Hidden } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { ResultRow } from '../molecules';
import ENDPOINTS from '../endpoints';
import { useParams } from 'react-router-dom';
import { useFetchRequest } from '../utils';
import { ErrorBox } from '../atoms';

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
    stripedRows: 'true',
  },
  row: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  pos: {
    width: '2em',
  },
}));

const useStateWithSessionStorage = sessionStorageKey => {
  const [lastHash, setLastHash] = useState(
    sessionStorage.getItem(sessionStorageKey) || '',
  );
  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, lastHash);
  }, [lastHash]);
  return [lastHash, setLastHash];
};

export const ResultsTable = props => {
  const classes = useStyles();
  const { t } = useTranslation();
  const errorList = [{ id: 1, error: 'dfd' }];
  const { eventId } = useParams();
  const [lastHash, setLastHash] = useStateWithSessionStorage('lastHash');
  const classResultState = useFetchRequest(
    ENDPOINTS.getResultatClassResults(eventId, props.classId),
  );
  let sessionStorageKey;
  if (classResultState.data && classResultState.data.hash) {
    sessionStorageKey = classResultState.data.hash;
  }
  useEffect(() => {
    setLastHash(sessionStorageKey);
  });

  let results;
  if (classResultState.isLoading) {
    results = (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  } else {
    results = (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.pos} size="small">
                #
              </TableCell>
              <TableCell>{t('Organisms.ResultsTable.Name')}</TableCell>
              <Hidden smDown>
                <TableCell>{t('Organisms.ResultsTable.Club')}</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell>{t('Organisms.ResultsTable.Start')}</TableCell>
              </Hidden>
              <TableCell>{t('Organisms.ResultsTable.Time')}</TableCell>
              <Hidden smDown>
                <TableCell>{t('Organisms.ResultsTable.Loss')}</TableCell>
              </Hidden>
            </TableRow>
          </TableHead>
          <TableBody>
            {classResultState.data.results ? (
              classResultState.data.results.map((row, index) => (
                <ResultRow
                  className={classes.tr}
                  key={row.name}
                  row={row}
                  index={index}
                ></ResultRow>
              ))
            ) : (
              <ErrorBox errorList={errorList} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return <>{results}</>;
};
