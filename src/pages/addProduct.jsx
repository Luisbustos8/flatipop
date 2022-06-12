import React, {useState} from "react";
import Layout from "../components/Layout/layout";
import AddProductForm from "../components/addProduct/addProductForm";
import { publishProduct } from "../api/products";

const AddProduct = () => {

   const [ loading, setLoading ] = useState(false);
   const [ error, setError ] = useState(null);
   const [ newProductSuccess, setNewProductSuccess ] = useState(false);

   const handleSubmit = async productData => {
      setLoading(true);
      try {
        await publishProduct(productData);
        setNewProductSuccess(true);
      } catch (error) {
         setError(error.message);
      } finally {
         setLoading(false);
      }
   };

   return(
        <>
           <Layout>
              <AddProductForm 
                  onSubmit={handleSubmit} 
                  error={error}
                  newProductSuccess={newProductSuccess}
                  loading={loading}
               />
           </Layout>
        </>
    )
}

export default AddProduct;