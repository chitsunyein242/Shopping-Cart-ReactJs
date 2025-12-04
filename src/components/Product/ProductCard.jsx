import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'
import { addToCart } from "../../features/carts/cartSlice";

const ProductCard = ({product }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (id,title,price,image) =>{
    dispatch(addToCart({
      id,title,price,image
    }))
  }

  return (
   <Grid size={{ xs: 12, md: 6, lg: 3}} display={"flex"} justifyContent="center">          
            <Card sx={{ maxWidth: 345 }} style={{
              height : 600,
              display : 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around'
            }}>
              <CardMedia
                style={{
                  objectFit: 'contain',
                }}
                component="img"
                alt="green iguana"
                height="350"
                image={product.image}
              />
              <CardContent>
                <Link
                  to={`products/${product.id}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                <Typography gutterBottom variant="h5" component="div">
                  { product.title.length > 50 ? product.title.substring(0,50) + "..." : product.title}
                </Typography>
                </Link>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {product.category}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button size="small" sx={{
                fontWeight: 900,
                backgroundColor: '#F56400', 
                color: 'white', 
                padding: '10px 15px',
                '&:hover': {
                  backgroundColor: 'white', 
                  color : '#F56400',
                  border : '2px solid #F56400'
                }
              }} onClick={() => handleAddToCart(product.id,product.title,product.price,product.image)}>Add To Cart</Button>
                <Typography variant="h6">{product.price} $</Typography>
              </CardActions>
            </Card>
          
    </Grid>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};


export default ProductCard
