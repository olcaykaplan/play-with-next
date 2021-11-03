import { Grid, Typography, Box, Button } from "@material-ui/core"
import axios from "axios"

const Details = ({product}) =>  {
    const addToCart = async () => {
        await axios('/api/add-toCart')
    }
    return (
     <Grid xl={6} lg={6} md={6} sm={12} xs={12}>
         <Typography variant="h4">{product.title}</Typography>
         <Box>
         <Typography variant="h3">$ { product.price}</Typography>
         <Typography variant="h5"> { product.rating.rate}</Typography>
         <Typography variant="subtitle1">({ product.rating.count}) people voted</Typography>
         <hr/>
         <Typography variant="body1">{product.description}</Typography>
         </Box>
         <hr/>
         <Button variant="contained" color="primary" onClick={addToCart}>Add to Cart</Button>   
      </Grid>
    )
}

export default Details


/*{
    "id": 10,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
    "rate": 2.9,
    "count": 470
    }
    },*/