import React, { useEffect, useState } from 'react';
import Show from '../Show/Show';
import './Product.css';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h1>Total Data:{products.length}</h1>
            <div className="card">
                {
                    products.map(product=><Show key={product.id} productDataSending={product}></Show>)
                }
            </div>
        </div>
    );
};

export default Product;