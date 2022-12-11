import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import './style.css'

import Home from './Components/Home'
import OrderSummary from './Components/OrderSummary'
import NoMatch from './Components/NoMatch'
import Products from './Components/Nested/Products'
import FeaturedProducts from './Components/Nested/Featured'
import NewProducts from './Components/Nested/NewProduct'
import Users, { UserDetails, AdminUser } from './Components/Users'
// import About from './Components/About'
const LazyAbout = lazy(() => import('./Components/About') )

const index = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="about" element={
          <Suspense fallback={<>Loading....</>}>
            <LazyAbout />
          </Suspense>
        } />
        <Route path="order-summary" element={<OrderSummary />} />
        {/* <Route path="products" element={<Products />} /> */}

        {/* Nested route Start */}
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured"  element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        {/* Nested route ends */}

        {/* Dynamic URL START*/}
        <Route path="users" element={<Users />}  />
        <Route path="users/:id" element={<UserDetails />} /> 
        <Route path="users/admin" element={<AdminUser />} /> 
        {/* <Route path="users" element={<Users />}  >
          <Route path=":id" element={<UserDetails />} />
        </Route> */}
        {/* Dynamic URL END*/}

        {/* no match url */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default index