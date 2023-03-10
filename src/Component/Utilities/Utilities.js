const addDb = (id) =>{
    let shoppingCart ={}
    
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)
    }else{
        shoppingCart={}
    }
    
    const quantity = shoppingCart[id]
    if(quantity){
        const newQty = shoppingCart[id] + 1; //This is not Array this is indexing
        shoppingCart[id] = newQty;
        // localStorage.setItem(id,newQty);
    }else{
        // localStorage.setItem(id,1)
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
}

export { addDb }

