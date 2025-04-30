import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Check login status from localStorage on page load
  useEffect(() => {
    const loginStatus = localStorage.getItem('loggedIn');
    if (loginStatus === 'true') {
      setLoggedIn(true);
    }
  }, []);

  // Simulating login (you would replace this with actual login logic)
  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true');
    setLoggedIn(true);  // Update state to reflect logged-in status
  };

  // Simulating logout (you would replace this with actual logout logic)
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);  // Update state to reflect logged-out status
  };

  return (
    
    <AppBar position="sticky" sx={{ bgcolor: '#004c99' }}>
      
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo Section (Left) */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: 'yellow',
              fontFamily: 'Cursive, sans-serif',
              textTransform: 'uppercase',
            }}
          >
            Crystal
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: 'yellow',
              fontStyle: 'italic',
              mt: 1, // Added margin-top to space it from the logo
              textAlign: 'center'
            }}
          >
            Hotel Management - A Years of Pleasure
          </Typography>
        </Box>
        <Sidebar/>
        {/* Navigation Links (Right) */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            component={Link}
            to="/home"
            sx={{
              color: 'yellow',
              fontWeight: 600,
              ml: 2,
              '&:hover': {
                backgroundColor: 'yellow',
                color: '#004c99',
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/search-hotels"
            sx={{
              color: 'yellow',
              fontWeight: 600,
              ml: 2,
              '&:hover': {
                backgroundColor: 'yellow',
                color: '#004c99',
              },
            }}
          >
            Search Hotels
          </Button>
          <Button
            component={Link}
            to="/about-us"
            sx={{
              color: 'yellow',
              fontWeight: 600,
              ml: 2,
              '&:hover': {
                backgroundColor: 'yellow',
                color: '#004c99',
              },
            }}
          >
            About Us
          </Button>
          <Button
            component={Link}
            to="/book-room"
            sx={{
              color: 'yellow',
              fontWeight: 600,
              ml: 2,
              backgroundColor: '#004c99',
              '&:hover': {
                backgroundColor: 'yellow',
                color: '#004c99',
              },
            }}
          >
            Book a Room
          </Button>

          {/* Conditional Rendering of Login/Logout Button */}
          {!loggedIn ? (
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                color: 'yellow',
                fontWeight: 600,
                ml: 2, // Ensuring the margin is applied to the right of the last nav item
                backgroundColor: '#004c99',
                '&:hover': {
                  backgroundColor: 'yellow',
                  color: '#004c99',
                },
              }}
              onClick={handleLogin} // Simulate login
            >
              Login
            </Button>
          ) : (
            <Button
              sx={{
                color: 'yellow',
                fontWeight: 600,
                ml: 2,
                backgroundColor: '#004c99',
                '&:hover': {
                  backgroundColor: 'yellow',
                  color: '#004c99',
                },
              }}
              onClick={handleLogout} // Simulate logout
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
