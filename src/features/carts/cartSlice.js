import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts : [],
    cart : {}
}
export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers :{
        addToCart : (state,{payload}) =>{  
            let itemInBasket = []
            itemInBasket = state.carts.filter(cart => cart.id == payload.id)
            if(itemInBasket.length < 1){
                state.carts.push({...payload,qty: 1})        
            }
            else{
                const carts = state.carts.map(cart => {
                    if(cart.id == payload.id){
                        cart.qty ++;
                    }
                    return cart;
                })

                state.carts = carts
            }    
        },
        increaseQty : (state,{payload}) =>{
             const carts = state.carts.map(cart => {
                    if(cart.id == payload){
                        cart.qty ++;
                    }
                    return cart;
                })

                state.carts = carts
        },
         decreaseQty : (state,{payload}) =>{
             const carts = state.carts.filter(cart => {
                    if(cart.id == payload && cart.qty !== 1){
                        cart.qty --;
                        return cart;
                    }else if(cart.id !== payload && cart.qty == 1){
                            return cart;
                    }
                        
                })

                state.carts = carts
        },
        removeCart : (state,{payload}) => {
            const carts = state.carts.filter (cart => cart.id !== payload)
            state.carts = carts
        }
    }
})

export const {addToCart,increaseQty,decreaseQty,removeCart} = cartSlice.actions;

export  const getAllCart = state => state.cartReducer.carts

export default cartSlice.reducer;