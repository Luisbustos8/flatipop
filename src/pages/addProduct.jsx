import React, {useState} from "react";
import Layout from "../components/Layout/layout";
import AddProductForm from "../components/addProduct/addProductForm";
import { publishProduct } from "../api/products";
import { useNavigate } from "react-router-dom";

const AddProduct = (props) => {

   const { setOpen } = props;

   const [ loading, setLoading ] = useState(false);
   const [ error, setError ] = useState(null);
   const [ newProductSuccess, setNewProductSuccess ] = useState(false);

    let navigate = useNavigate();

   const handleSubmit = async productData => {
      setLoading(true);
      try {
        await publishProduct(productData);
        setNewProductSuccess(true);
        setOpen(true);
      } catch (error) {
         setError(error.message);
      } finally {
         setLoading(false);
      }
   };

   if ( newProductSuccess) {
      navigate('/');
   };

   return(
        <>
           <Layout>
              <AddProductForm 
                  onSubmit={handleSubmit} 
                  error={error}
                  newProductSuccess={newProductSuccess}
                  setNewProductSuccess={setNewProductSuccess}
                  loading={loading}
               />
           </Layout>
        </>
    )
}

export default AddProduct;