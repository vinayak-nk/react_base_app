import CartContext from "./cartContext"


const CartProvider = (props) => {
  const handleAddItemToCart = (item) => {}
  const handleRemoveItemFromCart = (item) => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: (item) => handleAddItemToCart,
    removeItem: (itemId) => handleRemoveItemFromCart,  
  }

  return (
    <CartContext.Provider value={cartContext} >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider