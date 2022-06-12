import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Container } from "@mui/system";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

   const formStyle={
       display:'flex', 
       flexDirection:'column', 
       border: '1px solid black',  
       borderRadius: '20px',
       width: '500px',
       height: '400px',
       marginTop: '25px'
   }
   const buttonStyle = {
      display:'flex',
      marginTop: '25px', 
      width: '120px'
    }

const AddProductForm = (props) => {

    const { onSubmit, error, newProductSuccess, loading } = props;

    const [ newProduct, setNewProduct ] = useState();

    let navigate = useNavigate();

    const handleProductData = event => {
        setNewProduct(oldProductData => {
            const newProductData = {
                ...oldProductData,
                [ event.target.name ] : event.target.value
            }
            return newProductData;
        });
    };

    const handleSubmit = event => {
       event.preventDefault();
       onSubmit(newProduct);
    }
    
    return (
         <Container style={formStyle}>
               <h1>PUBLICA TU PRODUCTO</h1>
               {error !== null ?  <Alert severity="error">{error}</Alert> : null}
               { loading ? <p>Loading...</p> :
                <>
                 <TextField
                     style={{ marginTop: '10px'}}
                     required
                     id="outlined-required"
                     name='name'
                     label="Nombre del producto"
                    //  value={newProduct.name}
                     onChange={handleProductData}
                  />
                  <TextField
                     style={{ marginTop: '10px'}}
                     type='number'
                     name='price'
                     required
                     id="outlined-required"
                     label="Precio"
                    // value={newProduct.price}
                     onChange={handleProductData}
                  />
                  <TextField
                     style={{ marginTop: '10px'}}
                     required
                     name='description'
                     id="outlined-required"
                     label="Escribe una descripción"
                    //  value={newProduct.description}
                     onChange={handleProductData}
                  />
                  <div style={{ display: 'flex', justifyContent:'flex-end'}}>
                     <Button 
                        variant="outlined"
                        style={buttonStyle}
                        onClick={handleSubmit}
                     >
                        Publicar
                     </Button>
                  </div>
                  </>
                }
               </Container>
    )
}

export default AddProductForm;