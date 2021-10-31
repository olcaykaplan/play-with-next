// Dynamic page :
// [] => www.doman-name.com/products/product-id-here

import { Grid } from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/router";
import ProductImage from "../../components/ProductDetails/ProductImage";
import Details from "../../components/ProductDetails/Details";

export async function getStaticPaths() {
  //pre-generator of dynamic pages
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

export async function getStaticProps(context) {
  const productId = context.params.productId;
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );

  const SELECTED_PRODUCT = data;
  return {
    props: {
      product: SELECTED_PRODUCT,
    },
    revalidate: 1,
  };
}
const DyamicPage = ({ product }) => {
 
  // send a request to do Backedn API
  // to fetch information of the selected product in product list page
  return (
    <Grid container justify="center">
     <ProductImage productImage={product.image}/>
     <Details product={product}/>
    </Grid>
  );
};

export default DyamicPage;
