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
      // const updatedItems = state.items.concat(item) // concat returns new array <--> immutable state update
      const updatedTotalAmount = state.totalAmount + item.price * item.amount
      let updatedItems = []
      const index = state.items.findIndex(i => i.id === item.id )
      if (index !== -1) {
        updatedItems = [...state.items]
        let newItem = {
          ...state.items[index],
          amount: state.items[index].amount + item.amount
        }
        updatedItems[index] = newItem
      } else {
        updatedItems = state.items.concat(item)
      }
      return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    case 'REMOVE': {
      let updatedItems = []
      const index = state.items.findIndex(i => i.id === action.itemId)
      const newItem = {
        ...state.items[index],
        amount: state.items[index].amount - 1,
      }
      if (newItem.amount === 0) {
        updatedItems = [...state.items]
        updatedItems = state.items.filter(item => item.id !== action.itemId)
      } else {
        updatedItems = [...state.items]
        updatedItems[index] = newItem
      }
      const updatedTotalAmount = state.totalAmount - state.items[index].price
      return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    default: return state
  }
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState)
  console.log('cartState=', cartState)

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