import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Favorite, Share, Star } from "@material-ui/icons";
import React from "react";
import classes from "./productItem.module.css";

import Link from "next/link";

function ProductItem({ product }) {
  return (
    <Card variant="outlined" className={classes.card} key={product.id.toString()}>
      <CardHeader
        title={<Link href={"/products/" + product.id}><a>{product.title}</a></Link>}
        className={classes.cardHeader}
      />
      <Link href={"/products/" + product.id}>
        <CardMedia
          component="img"
          className={classes.cardMedia}
          image={product.image}
          alt={product.title}
        />
      </Link>
      <CardContent className={classes.content}>
        <Typography variant="body2" color="text.secondary">
          {product.description.length > 125
            ? `${product.description.substring(0, 126)}...`
            : product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardAction}>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Box>
          <Typography float="right">
            ${product.price}
            <Typography variant="display1">
              {" "}
              ({product.rating.rate} <Star fontSize="small" color="primary" />)
            </Typography>
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ProductItem;
