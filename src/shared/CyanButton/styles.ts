import { theme } from '@/utils/theme';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((defTheme: Theme) => ({
  button: {
    backgroundColor: theme.osprey.colors.primaryLight,
    color: theme.osprey.colors.bgDark,
    textTransform: 'none',
    padding: '6px 16px',
    '&:hover': {
      backgroundColor: theme.osprey.colors.secondaryLight,
      color: theme.osprey.colors.bgDark,
      borderColor: theme.osprey.colors.secondaryLight,
      boxShadow: '1px 0px 8px 4px ' + theme.osprey.colors.secondaryLight 
    },
  },
}));
