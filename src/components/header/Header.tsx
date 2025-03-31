import React from 'react';
import {
  AppBar,
  Box,
  Link,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { LanguageSelector } from '../language-selector';
import { useFeatureFlags } from './../../contexts/FeatureFlagContext';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

import logo from './../../assets/logo.png';

export const Header: React.FC = () => {
  const { enableLanguageSwitcher } = useFeatureFlags();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#073a67',
        color: '#ffffff',
        paddingBlockStart: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/">
            <ListItemIcon sx={{ minWidth: '34px' }}>
              <HomeIcon sx={{ color: '#ffffff', width: 30 }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Home
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/faq">
            <ListItemIcon sx={{ minWidth: '34px' }}>
              <HelpOutlineIcon sx={{ color: '#ffffff', width: 30 }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                  }}
                >
                  FAQ
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      {enableLanguageSwitcher && (
        <Box px={2} py={2}>
          <LanguageSelector />
        </Box>
      )}
    </Box>
  );

  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{ top: 0, paddingBlockStart: '20px' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left: Logo and Brand */}
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box
            component="img"
            src={logo}
            sx={{ width: 30, marginRight: '10px' }}
          />
          <Typography
            variant="h6"
            color="inherit"
            sx={{ color: '#ffffff', fontWeight: 700 }}
          >
            Beyond 100 things
          </Typography>
        </Link>

        {/* Right: Nav or Hamburger */}
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: '#ffffff', fontSize: '2.5rem' }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                fontWeight: 500,
                color: '#ffffff',
              }}
            >
              <HomeIcon fontSize="small" />
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/faq"
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                fontWeight: 500,
                color: '#ffffff',
              }}
            >
              <HelpOutlineIcon fontSize="small" />
              FAQ
            </Link>
            {enableLanguageSwitcher && <LanguageSelector />}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
