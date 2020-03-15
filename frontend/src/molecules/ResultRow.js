import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Hidden, Grid } from '@material-ui/core';
import { Emoji, TextWithTooltip } from '../atoms';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { formatTime, millisToMinutesAndSeconds } from '../utils';

const useStyles = makeStyles(theme => ({
  tableRow: {
    background: '#fafafa',
  },
}));

export function ResultRow({ row, ...inputProps }) {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <TableRow
      className={
        getStripedStyle(inputProps.index) === true ? classes.tableRow : ''
      }
      hover
    >
      <TableCell component="th" scope="row">
        {row.status === 0 ? (
          row.place + '.'
        ) : row.status === 3 ? (
          <TextWithTooltip text={t('Molecules.ResultRow.DSQ')} label="DSQ">
            <Emoji symbol="🙈" label="monkey" />
          </TextWithTooltip>
        ) : row.status === 10 ? (
          <TextWithTooltip
            text={t('Molecules.ResultRow.running')}
            label="running"
          >
            <Emoji symbol="🏃‍♂️" label="runner" />
          </TextWithTooltip>
        ) : (
          row.status === 1 && (
            <TextWithTooltip text={t('Molecules.ResultRow.DNS')} label="DNS">
              <Emoji symbol="⌛️" label="clock" />
            </TextWithTooltip>
          )
        )}
      </TableCell>
      <TableCell size="small">
        <Grid>
          <Grid item xs={12}>
            {row.name}
          </Grid>
          <Hidden mdUp>
            <Grid item xs={12}>
              {row.club}
            </Grid>
          </Hidden>
        </Grid>
      </TableCell>
      <Hidden smDown>
        <TableCell>{row.club}</TableCell>
      </Hidden>
      <Hidden smDown>
        <TableCell>{formatTime(row.start * 10)}</TableCell>
      </Hidden>
      <TableCell>
        {row.status === 0 ? (
          formatTime(row.result * 10)
        ) : row.status === 3 ? (
          <TextWithTooltip text={t('Molecules.ResultRow.DSQ')} label="DSQ">
            DSQ
          </TextWithTooltip>
        ) : (
          row.status === 1 && (
            <TextWithTooltip text={t('Molecules.ResultRow.DNS')} label="DNS">
              DNS
            </TextWithTooltip>
          )
        )}
      </TableCell>
      <Hidden smDown>
        <TableCell>
          {row.status === 0 &&
            '+' + millisToMinutesAndSeconds(row.timeplus * 10)}
        </TableCell>
      </Hidden>
    </TableRow>
  );
}

function getStripedStyle(index) {
  return index % 2 && true;
}
