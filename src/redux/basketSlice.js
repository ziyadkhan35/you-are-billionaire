import { createSlice } from "@reduxjs/toolkit/";
import { toast } from 'react-toastify';

const basketSlice=createSlice({
    name:'basket',
    initialState:{
        basketItems:[],
        totalQuantity:0,
        totalAmount:0
    },
    reducers:{
        addBasketItem:(state,action)=>{
            const itemIndex=state.basketItems.findIndex(item=>item.id===action.payload.id)
            if(itemIndex>=0){
                state.basketItems[itemIndex].quantity+=1;
                toast.info("Increased product",{position:"bottom-right",})
            }else{
                const tempProduct={...action.payload,quantity:1};
                state.basketItems.push(tempProduct);
                toast.success(`${action.payload.name} added to basket`,{position:"bottom-right",})
            }
        },
        removeBasketItem:(state,action)=>{
            const itemIndex=state.basketItems.findIndex((item)=>item.id===action.payload.id)
            if(state.basketItems[itemIndex].quantity>1){
                state.basketItems[itemIndex].quantity-=1;
                toast.error(`A ${action.payload.name} removed from basket`,{position:"bottom-right",})

            }else if(state.basketItems[itemIndex].quantity===1){
                const nextBasketItems=state.basketItems.filter((basketItem)=>basketItem.id!==action.payload.id);
                state.basketItems=nextBasketItems;
                toast.error(`${action.payload.name} removed from basket`,{position:"bottom-right",})
            }
        },
        getTotals:(state,action)=>{
            let {total,quantity}=state.basketItems.reduce((basketTotal,basketItem)=>{
                const{price,quantity}=basketItem;
                const itemTotal=price*quantity;

                basketTotal.total+=itemTotal
                basketTotal.quantity+=quantity

                return basketTotal
            },
            {
                total:0,
                quantity:0
            })
            state.totalAmount=total;
            state.totalQuantity=quantity;
        },
        clearBasket(state,action){
            state.basketItems=[];   
            toast.error("Basket cleared",{position:"bottom-right",})
        }
}})

export const {addBasketItem,incAmount,removeBasketItem,getTotals,clearBasket} = basketSlice.actions;
export default basketSlice.reducer;