import React, { Fragment, useState } from 'react'
import Cart from './components/Cart';
import Header from "./components/Layout/Header";
import Meals from './components/Meals';
import CartProvider from './store/CartProvider';


function App() {
  const [showCart, toggleCart] = useState(false)

  const toggleCartDisplay = () => {
    toggleCart(!showCart)
  }

  return (
    <CartProvider>
      {showCart && <Cart toggleCartDisplay={toggleCartDisplay} />}
      <Header toggleCartDisplay={toggleCartDisplay} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
