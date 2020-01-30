import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
export function TextFieldWithLabel({ error, label, inputRef, ...inputProps }) {
  return (
    <Grid item xs={12}>
      <TextField
        error={error ? true : undefined}
        helperText={error ? error : null}
        label={label}
        ref={inputRef}
        {...inputProps}
      />
    </Grid>
  );
}
