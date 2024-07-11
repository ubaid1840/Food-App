import { createContext, useReducer } from "react";
import { CLEAR_CART, SET_CART} from '../action/CartAction'
import { myCartReducer } from '../reducer/CartReducer'

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [state, dispatch] = useReducer(myCartReducer, { value: { data: [] }})

    const setCart = (data) => {
        dispatch({ type: SET_CART, payload: { data: data } })
    }

    const clearCart = () => {
        dispatch({ type: CLEAR_CART })
    }


    return (
        <CartContext.Provider
            value={{ state, setCart, clearCart }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider