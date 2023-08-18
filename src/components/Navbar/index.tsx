import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { theme } from '@/utils/theme';
import { CyanButton } from '@/shared';
import { navItems } from '@/constants/vars';
import { useStyles } from './styles';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', color: theme.osprey.colors.fontWhite }}
    >
      <Typography
        fontSize={32}
        fontFamily={'Quicksand'}
        fontWeight={400}
        sx={{ my: 2 }}
      >
        OSPREY
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: 'center',  }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component='nav'
        className={classes.appBar}
      >
        {/* Nav-Left */}
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display={'flex'}
            alignItems={'center'}
          >
            <Typography
              fontSize={32}
              fontFamily={'Quicksand'}
              fontWeight={200}
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              OSPREY
            </Typography>
            <Box
              sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}
              paddingLeft={5}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: theme.osprey.colors.fontWhite, textTransform: 'none' }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
        {/* Nav-Right */}
        <Box>
          <CyanButton
            buttonText='Book For Call'
            handleClick={() => {}}
          />
        </Box>
      </AppBar>

      {/* Drawer for mobile screen */}
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'transparent',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}