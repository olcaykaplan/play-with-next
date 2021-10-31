//Link is special for nextjs. It prevents to reload the page and making a request for new html dom,
// with the link its change the route but acting like a single page
import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
import ProductItem from "../../components/ProductList/ProductItem";
import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <div className="main-content">
      <Typography variant="h3" style={{marginBottom:"20px"}}>Products</Typography>
      <Grid
        container
        spacing={3}
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {products.map((product) => (
         <ProductItem product={product} /> 
        ))}
      </Grid>
    </div>
  );
}
export async function getStaticProps() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  console.log(data);
  const PRODUCTS = data;
  return {
    props: {
      products: PRODUCTS,
    },
    revalidate: 1,
  };
}
export default ProductList;
