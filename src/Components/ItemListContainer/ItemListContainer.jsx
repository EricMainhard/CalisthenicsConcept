import React, {useEffect,useState} from "react";
import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import productsList from '../../products.json';
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer(){

    const category = useParams()

    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = query(collection(db, "products"));
        getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
   
    return(
        <section className="itemListSection container">
            <div className="itemListContainer">
                {loading ? <Loader/> : <ItemList products={products} search={category}/>}
            </div>
        </section>
    )
}

export default ItemListContainer;

