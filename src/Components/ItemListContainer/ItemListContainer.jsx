import React, {useEffect,useState} from "react";
import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import NoResults from '../NoResults/NoResults.jsx';
import Loader from "../Loader/Loader";
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer(){

    const category = useParams()

    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = category.category ?
            query(collection(db, "products"), where('category', '==', category.category))
        :
            query(collection(db, "products"))
        getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [category])
   
    return(
        <section className="itemListSection container">
            <div className="itemListContainer">
                {loading ? <Loader/> 
                    : products.length > 1 
                    ? <ItemList products={products} search={category}/> :
                    <NoResults/>
                }
            </div>
        </section>
    )
}

export default ItemListContainer;

