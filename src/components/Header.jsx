import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <>
       <AppBar position="sticky" color="primary" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          User Comments Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Header

