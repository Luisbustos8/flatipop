import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Loader from '../../reusable/Loader';

const TableProducts = (props) => {

    const { data } = props;

    return (
        <>
     { typeof data === 'undefined' ? <Loader /> :
        <>
        <Container sx={{ display: 'flex', justifyContent: 'center', width:'700px'}}>
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Producto</TableCell>
                            <TableCell align='center'>Precio</TableCell>
                            <TableCell align='right'>Descripción</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(product => (
                            <TableRow key={product._id}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell align='center'>{product.price}€</TableCell>
                                <TableCell align='right'>{product.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    </>
    }
    </>
    )
}

export default TableProducts;