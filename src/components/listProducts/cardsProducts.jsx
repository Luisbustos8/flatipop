import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/placeholder.png';
import { Container } from '@mui/material';
import Loader from '../../reusable/Loader';


const CardsProducts = (props) => {
    const { data } = props;
    return (
        <>
        {typeof data === 'undefined' ?
             <Loader />
             : 
             <>
             <Container sx={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center' }}>
                {data.map(product => {
                    return (
                <Card sx={{ maxWidth: 345, width: '300px', m:2 }} key={product._id}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            image={ product.image ? product.image : placeholder}
                            alt="product image"
                        />
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           {product.description}
                        </Typography>
                         <Typography variant="body2" color="text.secondary">
                           {product.price}€
                        </Typography>
                    </CardContent>
            </Card>
                    )
                })}
             </Container>
    </>
    }
    </>
        
    )
}
export default CardsProducts;