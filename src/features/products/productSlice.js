import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    products : [],
    product : {}
}

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers :{
        fetchProducts : (state,{payload}) => {
            state.products = payload;
        },
        selectedProduct : (state,{payload}) =>{
            state.product = payload;
        },
        removeSelectedProduct : (state) =>{
            state.product = {};
        }
    }
})

export const {fetchProducts,selectedProduct,removeSelectedProduct} = productSlice.actions;

export const getAllProducts = state => state.productReducer.products;
export const singleProduct = state => state.productReducer.product;

export default productSlice.reducer;