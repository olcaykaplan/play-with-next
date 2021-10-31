import { Grid } from "@material-ui/core";
import React from "react";
import ProductItem from "./ProductItem";
import classes from "./productList.module.css";
import Link from "next/link";

function ProductList({ products }) {
  return (
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
      {products.map((p) => (
        <ProductItem product={p} />
      ))}
    </Grid>
  );
}

export default ProductList;
