import React from "react";
import Button from '@mui/material/Button';


const EmptyList = () => {
    return(
        <div style={{ textAlign: 'center', fontFamily:'fantasy', color:'green',fontSize:'30px' }}>
        <p>¡Se el primero en subir un anuncio!</p>
        <Button as={Link} to="/advert" variant="primary">
            Nuevo anuncio
        </Button>
         </div>
    )
};

export default EmptyList;