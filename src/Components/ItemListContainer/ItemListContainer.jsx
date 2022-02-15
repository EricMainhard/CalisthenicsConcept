import React, {useEffect,useState} from "react";
import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import productsList from '../../products.json';
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer(){

    const category = useParams()

    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const promise = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productsList);
            },2000)
        });
        promise.then(result => {
            
            setProducts(result);
        })
        promise.finally(()=>{
            setLoading(false)
        })
    },[])

    return(
        <section className="itemListSection container">
            <div className="itemListContainer">
                {loading ? <Loader/> : <ItemList products={products} search={category}/>}
            </div>
        </section>
    )
}

export default ItemListContainer;

