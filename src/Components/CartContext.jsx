import React, { useContext, useReducer, createContext } from "react";
import reducer from "./reducer";
import { 
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS 
} from "./actions";
import cartItems from "../Cartdata";
import { getTotals } from "./utils";


console.log(cartItems,"cartItems")
const AppContext = createContext();

const initialState = {
    loading: false,
    cart: new Map(cartItems.map((Item) => [Item.id, Item])),
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer,
    initialState);
    const { totalAmount, totalCost } = getTotals(state.cart);
    

    const clearCart = () => {
        dispatch({ type: CLEAR_CART});
    }
    const remove = (id) => {
        dispatch({ type: REMOVE, payload: { id } });
    };
    const increase = (id) => {
        dispatch({ type: INCREASE, payload: { id }});
    };
    const decrease = (id) => {
        dispatch({ type: DECREASE, payload: { id }});
    };


    return (
       
        <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease, totalAmount, totalCost }}>
            {children}
        </AppContext.Provider>
    );
};


export const useGlobalContext = () => {
    console.log(AppContext,"AppContext")
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within an AppProvider');
    }
    return context;
};