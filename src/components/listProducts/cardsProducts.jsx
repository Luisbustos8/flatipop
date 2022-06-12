import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/placeholder.png';
import { Container } from '@mui/material';


const CardsProducts = (props) => {
    const { data } = props;
    return (
        <>
        {typeof data === 'undefined' ?
             <h6>Loading...</h6> 
             : 
             <>
             <Container sx={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center' }}>
                {data.map(product => {
                    return (
                <Card sx={{ maxWidth: 345, width: '300px', m:2 }}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            // src={placeholder}
                            image={ product.image ? product.image : placeholder}
                            alt="green iguana"
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