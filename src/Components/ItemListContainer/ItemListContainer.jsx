import React, {useEffect,useState} from "react";
import './itemListContainer.css';

function ItemListContainer({productsCount}){

    const [productsContent,setProductsContent] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            if (productsCount > 0) {
                setProductsContent('products');
            } else {
                setProductsContent('Out of stock! :('); 
            }
            setLoading(false);
            },3000)
            
    })
    
    return(
        <section className="itemListSection container">
            <div className="itemListContainer">
                {loading === true ? 'Loading...' : productsContent}
            </div>
        </section>
    )
}

export default ItemListContainer;

