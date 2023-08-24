import { UIConstants } from '@/constants/vars';
import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroGridMain: {
      height: 700,
      marginTop: UIConstants.heroMargin,
      marginBottom: UIConstants.heroMargin,
      border: `1px solid ${theme.osprey.colors.borderLight}`,
      borderTop: 0,
      borderRadius: `0px 0px 12px 12px`,
      backgroundImage: `radial-gradient(circle farthest-corner at 0% 96%, ${theme.osprey.colors.borderLight} 5%, ${theme.osprey.colors.bgLight} 22%)`
    },
  })
);
