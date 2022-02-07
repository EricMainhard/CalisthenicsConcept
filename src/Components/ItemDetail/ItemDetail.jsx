import { type } from "@testing-library/user-event/dist/type";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import SingleItem from "../SingleItem/SingleItem.jsx";
import products from '../../products.json';

function ItemDetail(){

    const id = useParams();
    const [selectedProduct,setSelectedProduct] = useState({});
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            let product = products.find(product => product.id == id.id);
            setSelectedProduct(product);
            setLoading(false);
        },2000)
    },[])

    return(
        <div className="detailContainer">
            {loading ? <Loader/> : <SingleItem single={selectedProduct}/>}
        </div>
    )
}

export default ItemDetail;