import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './styles';

export const RightImagedHero = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.heroGridMain}
    >
      <Grid item></Grid>
    </Grid>
  );
};