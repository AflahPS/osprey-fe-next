import { UIConstants } from '@/constants/vars';
import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.osprey.colors.bgDark,
      paddingRight: "24px",
      paddingLeft: "24px",
      borderBottom: `1px solid ${theme.osprey.colors.primaryLight}`
    },
  })
);
