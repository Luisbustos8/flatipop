import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const theme = createTheme({
typography: {
    fontFamily: 'Raleway, Arial',
  },
  palette: {
    colorHeader: {
      main: '#000000',
    },
  },
});

theme.typography.h6 = {
  fontSize: '16px',
  fontFamily: 'Raleway, Arial', 
  color: 'white',
  fontWeight: 'lighter',
  '@media (min-width:600px)': {
    fontSize: '20px',
  },
}

const Header = (props) => {

    return (
        <header>
            <ThemeProvider theme={theme}>
            <AppBar position="static" color='colorHeader'>
                <Toolbar>
                    <Typography variant='h6'>
                        F L A T I P O P  1 0 1 
                    </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection: 'row-reverse' } }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Productos
                            </Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Añade tu producto
                            </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </header>
    )
}
export default Header;