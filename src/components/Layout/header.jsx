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
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    colorHeader: {
      main: '#000000',
    },
  },
});

theme.typography.h6 = {
  fontSize: '14px',
  fontFamily: 'Raleway, Arial', 
  color: 'white',
  fontWeight: 'lighter',
  '@media (min-width:600px)': {
    fontSize: '16px',
  },
}

const Header = () => {

    return (
        <header>
            <ThemeProvider theme={theme}>
            <AppBar position="static" color='colorHeader'>
                <Toolbar>
                    <Typography variant='h6'>
                        F L A T I P O P 1 0 1 * * *     
                    </Typography>
                        <Container sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                            <Button
                               style={{color: 'white'}}
                               href={'/'}
                            >
                                Productos
                            </Button>
                            <Button
                                style={{color: 'white', textDecoration:'none '}}
                                href='/newProduct'
                            >
                                Añade tu producto
                            </Button>
                    </Container>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </header>
    )
}
export default Header;