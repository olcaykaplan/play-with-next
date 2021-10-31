import { Grid } from "@material-ui/core";

const ProductImage = ({ productImage }) => {
  return (
    <Grid xl={6} lg={6} md={6} sm={12} xs={12} container justify="center" >
      <img src={productImage} />
    </Grid>
  );
};

export default ProductImage;
