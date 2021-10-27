import React from 'react'
import ProductItem from './ProductItem'
import classes from './productList.module.css'
function ProductList({products}) {
    return (
        <div className={classes.container}>
        {products.map(p => (
             <ProductItem product={p} />  
        ))}
        </div>
    )
}

export default ProductList
