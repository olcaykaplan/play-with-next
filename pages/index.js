//  domain/(nothing) (www.doman-name.com/)  ==>  runs index.js

import { Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import ProductList from "../components/ProductList";


function HomePage(props) {
    return (
        <div className="main-content">
            <Typography variant="h3" style={{marginBottom:"20px"}}>Products</Typography>
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