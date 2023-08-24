import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './styles';
import Image from 'next/image';
import printerSkeleton from '../../../assets/PrinterRightImage.png'

export const RightImagedHero = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.heroGridMain}
    >
      <Grid flex={2} item>Text</Grid>
      <Grid flex={1} item component={"image"} sx={{objectFit: "cover"}}>
        <Image src={printerSkeleton} alt='printer-skeleton' height={700} />
      </Grid>
    </Grid>
  );
};