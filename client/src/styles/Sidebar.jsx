import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

function Sidebar({ open, setOpen }) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}  // Close the sidebar when clicked outside
    >
      <IconButton
        sx={{ color: 'yellow', position: 'absolute', top: 10, right: 10 }}
        onClick={() => setOpen(false)}
      >
        <CloseIcon />
      </IconButton>
      <List sx={{ width: 250, bgcolor: '#004c99' }}>
        <ListItem button>
          <ListItemText primary="Home" sx={{ color: 'yellow' }} />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Search Hotels" sx={{ color: 'yellow' }} />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About Us" sx={{ color: 'yellow' }} />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Book a Room" sx={{ color: 'yellow' }} />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
