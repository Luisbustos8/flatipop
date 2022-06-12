import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from "@mui/system";


const AddProductForm = () => {
    const formStyle={
       display:'flex', 
       flexDirection:'column', 
       border: '1px solid black',  
       borderRadius: '20px',
       width: '500px',
       height: '400px',
       marginTop: '15px'
   }
   const buttonStyle = {
      display:'flex',
      marginTop: '25px', 
      width: '120px'
    }

    return (
         <Container style={formStyle}>
               <h1>PUBLICA TU PRODUCTO</h1>
                 <TextField
                     style={{ marginTop: '10px'}}
                     required
                     id="outlined-required"
                     label="Nombre del producto"
                  />
                  <TextField
                     style={{ marginTop: '10px'}}
                     type='number'
                     required
                     id="outlined-required"
                     label="Precio"
                  />
                  <TextField
                     style={{ marginTop: '10px'}}
                     required
                     id="outlined-required"
                     label="Escribe una descripción"
                  />
                  <div style={{ display: 'flex', justifyContent:'flex-end'}}>
                     <Button 
                        variant="outlined"
                        style={buttonStyle}
                     >
                        Publicar
                     </Button>
                  </div>
               </Container>
    )
}

export default AddProductForm;