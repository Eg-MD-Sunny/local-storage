import React from 'react';
import { addDb } from '../Utilities/Utilities';
import './Show.css';

const Show = (props) => {
    const {id,name,price} = props.productDataSending;
    const addToCart = (id) =>{
        // console.log('Product Added',id)
        addDb(id);
    }
    return (
        <div className="product-area">
            <h2>Product:{name}</h2>
            <p>ID:{id}</p>
            <p style={{color:'red', fontWeight:'bold'}}>Price: ${price} USD</p>
            <button style={{padding:'5px 10px'}} onClick={()=>addToCart(id)}>Add To Cart</button>
        </div>
    );
};

export default Show;