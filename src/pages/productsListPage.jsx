import React, {useState, useEffect, useContext} from "react";
import Layout from "../components/layout/Layout";
import TableProducts from "../components/listProducts/TableProducts";
 import { getProducts } from '../api/products';
import CardsProducts from "../components/listProducts/CardsProducts";
import ViewMode from "../components/listProducts/ViewMode";
import {ProductContext} from "../context/ProductProvider";
import Alert from '@mui/material/Alert';


const ProductsListPage = ( props ) => {

    const { products, setProducts } = useContext(ProductContext);

    const [ modeView, setModeView ] = useState('list')
    const [ error, setError ] = useState(null);

   
    const getDataProducts = async () => {
        const dataProducts = await getProducts();
        setProducts(dataProducts.data);
    };
   
    useEffect(() => {
        getDataProducts();

    },[])

    return(
        <Layout>
      
            <h1>VISITA TODOS NUESTROS PRODUCTOS</h1>
            {error !== null ?  <Alert severity="error">{error}</Alert> : null}
            <ViewMode setMode={setModeView}/>
            {
                modeView === 'list' 
                ?
                <TableProducts data={products} />
                :
                <CardsProducts data={products} />
            }
        </Layout>
        
    )
};

export default ProductsListPage;