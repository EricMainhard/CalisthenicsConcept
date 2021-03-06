import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import SingleItem from "../SingleItem/SingleItem.jsx";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetail(){

    const id = useParams();
    const [selectedProduct,setSelectedProduct] = useState({});
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, "products", id.id)
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