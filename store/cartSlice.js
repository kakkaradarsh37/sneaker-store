import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find(
                (p) => p.id === action.payload.id
            );
            if(item){
                item.quantity++;
                item.attributes.price = item.oneQuantityPrice * item.quantity; 
            }
            else{
            state.cartItems.push ({...action.payload, quantity: 1});
    }  

    },
    updateCart: (state,action)=>{
        state.cartItems= state.cartItems.map((p)=>{
            if(p.id=== action.payload.id){
                if(action.payload.key=== "quantity")
                {
                    p.attributes.price= p.oneQuantityPrice* action.payload.val;//user has selected whichever quantity it will get multiplied with no. of quantities
                }
                return {...p, [action.payload.key]: action.payload.val};//p will be destructured 
            }
            return p;
        });
    },
    removeFromCart: (state,action)=>{
        state.cartItems = state.cartItems.filter((p)=> p.id!== action.payload.id)//means that id is being passed in action is selected ands except that all other id's of products will be filtered
    }
        
       
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart,removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;