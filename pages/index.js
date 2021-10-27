//  domain/(nothing) (www.doman-name.com/)  ==>  runs index.js

import axios from "axios";
import ProductList from "../components/ProductList";


function HomePage(props) {
    return (
        <div className="main-content">
          <h1>Products</h1>
           <ProductList  products={props.products} />
        </div>
    )
}
export async function getStaticProps() {

  const {data} =  await axios.get("https://fakestoreapi.com/products")
  console.log(data)
  const PRODUCTS = data
  return {
      props: {
          products: PRODUCTS
      },
      revalidate: 1
  };
}

export default HomePage