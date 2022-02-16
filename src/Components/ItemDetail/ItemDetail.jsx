import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import SingleItem from "../SingleItem/SingleItem.jsx";
import products from '../../products.json';
import NotFound from "../NotFound/NotFound";

function ItemDetail(){

    const id = useParams();
    const [selectedProduct,setSelectedProduct] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    
    useEffect(()=>{
        setTimeout(()=>{
            setError(false)
            let product = products.find(product => product.id == id.id);
            console.log(product)
            setSelectedProduct(product);
            setLoading(false);
        },2000)
    },[id])

    return(
        <div className="detailContainer">
            {loading && <Loader/>}
            {!loading && <SingleItem single={selectedProduct}/>}
        </div>
    )
}

export default ItemDetail;