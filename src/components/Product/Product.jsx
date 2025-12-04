import Grid from "@mui/material/Grid";
import { api } from "../../api/index.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts, removeSelectedProduct } from "../../features/products/productSlice.js";
import ProductCard from "./ProductCard.jsx";

const Product = () => {
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const [isloading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    const res = await api.get("/products");
    dispatch(fetchProducts(res.data));
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(removeSelectedProduct())
    getProducts();
  }, []);

  return (
    <div>
      {isloading ? (
        <h1>Loading.....</h1>
      ) : (
        <Grid
          container
          spacing={2}
          style={{
            marginTop: "20px",
            padding : '0 20px',
            marginBottom: '100px'
          }}
        >
          {products.map((product, key) => (
            <ProductCard key={key} product={product} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Product;