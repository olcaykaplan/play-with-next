import {
  Avatar,
    Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import {
  ExpandMore,
  Favorite,
  MoreVert,
  Share,
  Star,
} from "@material-ui/icons";
import React from "react";
import classes from "./productItem.module.css";
// import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography} from '@material-ui/core';
// import {FavoriteIcon, ShareIcon, ExpandMoreIcon, MoreVertIcon} from '@mui/icons-material';

// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

function ProductItem({ product }) {
  return (
    <Card variant="outlined" className={classes.card}>
      <CardHeader title={product.title} className={classes.cardHeader} />
      <CardMedia
        component="img"
        className={classes.cardMedia}
        image={product.image}
        alt={product.title}
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="text.secondary">
          {product.description.length > 125
            ? (`${product.description.substring(0, 126)}...`)
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
          {product.price} 

            <Typography variant="display1" >({product.rating.rate} <Star fontSize="small" color="primary" />)</Typography>
            
          
        </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ProductItem;
