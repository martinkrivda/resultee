import React from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
export function CheckBoxWithLabel({ error, label, inputRef, ...inputProps }) {
  return (
    <Grid item xs={12}>
      <FormControlLabel
        control={
          <Checkbox
            error={error ? true : undefined}
            helperText={error ? error : null}
            ref={inputRef}
            {...inputProps}
          />
        }
        label={label}
      />
    </Grid>
  );
}
