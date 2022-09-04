import React, { Fragment, useState } from 'react'
import Cart from './components/Cart';
import Header from "./components/Layout/Header";
import Meals from './components/Meals';


function App() {
  const [showCart, toggleCart] = useState(false)

  const toggleCartDisplay = () => {
    toggleCart(!showCart)
  }

  return (
    <Fragment>
      {showCart && <Cart toggleCartDisplay={toggleCartDisplay} />}
      <Header toggleCartDisplay={toggleCartDisplay} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
