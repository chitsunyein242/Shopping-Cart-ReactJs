import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../api";
import {
  selectedProduct,
  singleProduct,
} from "../../features/products/productSlice";
import { useEffect, useState } from "react";
import { addToCart } from "../../features/carts/cartSlice";
import CardActions from "@mui/material/CardActions";

const Details = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (id, title, price, image) => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        image,
      })
    );
  };

  const product = useSelector(singleProduct);
  const { productId } = useParams();
  const [isloading, setIsLoading] = useState(false);

  const fetchProduct = async () => {
    setIsLoading(true);
    const res = await api
      .get(`/products/${productId}`)
      .catch((e) => console.log(e.message));

    dispatch(selectedProduct(res.data));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {isloading ? (
        <h1>Loading.....</h1>
      ) : (
        <Container maxWidth="sm" sx={{ marginBottom: 20}}>
          <img
            src={product.image}
            style={{
              width: "100%",
              height: "60vh",
              objectFit: "contain",
            }}
          />
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            {product.category}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", marginBottom: '10px' }}>
            {product.description}
          </Typography>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              size="small"
              sx={{
                fontWeight: 900,
                backgroundColor: "#F56400",
                color: "white",
                padding: "10px 15px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#F56400",
                  border: "2px solid #F56400",
                },
              }}
              onClick={() =>
                handleAddToCart(
                  product.id,
                  product.title,
                  product.price,
                  product.image
                )
              }
            >
              Add To Cart
            </Button>
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              {product.price} $
            </Typography>
          </CardActions>
        </Container>
      )}
    </div>
  );
};

export default Details;
