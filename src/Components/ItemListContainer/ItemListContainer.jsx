import React, {useEffect,useState} from "react";
import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import productsList from '../../products.json';
import Loader from "../Loader/Loader";

function ItemListContainer(){

    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const promise = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productsList);
            },3000)
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
                {loading ? <Loader/> : <ItemList products={products}/>}
            </div>
        </section>
    )
}

export default ItemListContainer;

