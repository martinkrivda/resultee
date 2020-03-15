import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

export const TextWithTooltip = ({ text, label, children }) => (
  <Tooltip title={text} aria-label={label} placement="bottom-start">
    <Typography>{children}</Typography>
  </Tooltip>
);
