import React, {useState, useEffect} from "react";
import Layout from "../components/Layout/layout";
import TableProducts from "../components/listProducts/tableProducts";
import { getProducts } from '../api/products';
import CardsProducts from "../components/listProducts/cardsProducts";
import ViewMode from "../components/listProducts/viewMode";


const ProductsListPage = () => {

    const [ products, setProducts ] = useState();
    const [ modeView, setModeView ] = useState('list')
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState();

    const getDataProducts = async () => {
        const dataProducts = await getProducts();
        setProducts(dataProducts.data);
    };

    useEffect(() => {
        getDataProducts();
    },[])

    console.log(modeView)

    return(
        <Layout>
            <h1>VISITA TODOS NUESTROS PRODUCTOS</h1>
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