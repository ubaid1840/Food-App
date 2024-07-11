import { CLEAR_CART, SET_CART } from '../action/CartAction'

export const myCartReducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      let newCartState = { ...state }
      newCartState.value.data = action.payload.data       
      return newCartState
      break
    case CLEAR_CART:
      let newClearState = { ...state }
      newClearState.value.data = []
      return newClearState
      break
    default:
      return state
  }
}

