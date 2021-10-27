import React from 'react'
import classes from './productItem.module.css'
function ProductItem({product}) {
    return (
        <div className={classes.card} key={product.id}>
            <img title={product.title} src={product.image} className={classes.productImg}/>
            <div className={classes.container}>
                <h3>{product.title}</h3>
               Price : {product.price}
                ({product.rating.rate}
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgLjU4N2wzLjY2OCA3LjU2OCA4LjMzMiAxLjE1MS02LjA2NCA1LjgyOCAxLjQ4IDguMjc5LTcuNDE2LTMuOTY3LTcuNDE3IDMuOTY3IDEuNDgxLTguMjc5LTYuMDY0LTUuODI4IDguMzMyLTEuMTUxeiIvPjwvc3ZnPg=="/>
                )
               
            </div>
        </div>
    )
}

export default ProductItem

// {
//     "id": 2,
//     "title": "Mens Casual Premium Slim Fit T-Shirts ",
//     "price": 22.3,
//     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     "rating": {
//     "rate": 4.1,
//     "count": 259
//     }