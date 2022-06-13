import React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Layout from '../components/layout/Layout';
import Button from '@mui/material/Button';

const Error404 = () => {


    return (
        <Layout>
            <Container sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h2" gutterBottom component="div">
                    Parece que ha ocurrido un error
                </Typography>
                <Button
                    style={{color: 'Black', textDecoration:'none '}}
                    href='/'
                >
                Recargar
                </Button>
            </Container>
        </Layout>
    )
}

export default Error404