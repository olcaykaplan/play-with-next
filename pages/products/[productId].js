// Dynamic page :
// [] => www.doman-name.com/products/product-id-here

import { Grid } from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/router";
import ProductImage from "../../components/ProductDetails/ProductImage";
import Details from "../../components/ProductDetails/Details";
import Head from 'next/head'
export async function getStaticPaths() {
  //pre-generator of dynamic pages here 
  // tell the next js how many pages will be made
  const { data } = await axios.get("https://fakestoreapi.com/products");
  const paths = data.map((product) => {
    return {
      params: { productId: product.id.toString() },
    };
  });
  return {
    fallback: false,
    paths: paths,
  };
}

export const getStaticProps = async (context) => {
  
  // after getStaticPaths each created page will run this function
  // and fetch each item we need and then will return data to component (product)
  // so it will generate a template for each of these pages
  const productId = context.params.productId;
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );

  const SELECTED_PRODUCT = data;
  return {
    props: {
      product: SELECTED_PRODUCT,
    },
  };
}
const DyamicPage = ({ product }) => {
  // 
  return (
    <>
      <Head>
        <title>Next | Product Detail</title>
      </Head>
      <Grid container justify="center">
        <ProductImage productImage={product.image} />
        <Details product={product} />
      </Grid>
    </>
  );
};

export default DyamicPage;
