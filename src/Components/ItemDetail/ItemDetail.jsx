import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import SingleItem from "../SingleItem/SingleItem.jsx";
import products from '../../products.json';
import NotFound from "../NotFound/NotFound";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetail(){

    const id = useParams();
    const [selectedProduct,setSelectedProduct] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    
    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, "products", id);
        getDoc(queryDb)
        .then(resp => setSelectedProduct({ id: resp.id, ...resp.data() }))
        .finally(() => setLoading(false))
    }, [id])

    return(
        <div className="detailContainer">
            {loading && <Loader/>}
            {!loading && <SingleItem single={selectedProduct}/>}
        </div>
    )
}

export default ItemDetail;