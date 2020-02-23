import React from 'react';
import Box from '@material-ui/core/Box';
import { Copyright } from '../atoms';
export function CopyrightWithBox() {
  return (
    <Box mt={5} pb={5}>
      <Copyright />
    </Box>
  );
}
