import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Header() {
  return (
    <>
       <AppBar position="sticky" color="primary" sx={{ mb: 4 }}>
         <Container maxWidth="lg">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          User Comments Dashboard
        </Typography>
      </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}

export default Header

