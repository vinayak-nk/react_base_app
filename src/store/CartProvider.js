import { useReducer } from "react"
import CartContext from "./cartContext"


const initialCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD': {
      const { item } = action
      const updatedItems = state.items.concat(item) // concat returns new array <--> immutable state update
      const updatedTotalAmount = state.totalAmount + item.price * item.amount

      return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    case 'REMOVE': return state
    default: return state
  }
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState)

  const handleAddItemToCart = (item) => {
    dispatchCartAction({type: 'ADD', item})
  }
  
  const handleRemoveItemFromCart = (id) => {
    dispatchCartAction({type: 'REMOVE', itemId: id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart,  
  }

  return (
    <CartContext.Provider value={cartContext} >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider