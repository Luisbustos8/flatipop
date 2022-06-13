import React from "react";
import Button from '@mui/material/Button';


const EmptyList = () => {
    return(
        <div style={{ textAlign: 'center', fontFamily:'fantasy', color:'green',fontSize:'30px' }}>
        <p>¡Se el primero en subir un producto!</p>
        <Button
            style={{color: 'black', textDecoration:'none '}}
            href='/newProduct'
        >
            ¡Anuncia tu producto!
        </Button>
         </div>
    )
};

export default EmptyList;