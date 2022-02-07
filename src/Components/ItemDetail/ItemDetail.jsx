import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import SingleItem from "../SingleItem/SingleItem";
import productsList from '../../products.json';

function ItemDetail(){

    const id = useParams();
    const [selectedProduct,setSelectedProduct] = useState();
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            let product = productsList.find(product => product.id == id.id);
            setSelectedProduct(product);
            setLoading(false);
        },2000)
    },[])

    return(
        <div className="detailContainer">
            {loading ? <Loader/> : <ItemSingle/>}
        </div>
    )
}

export default ItemDetail;