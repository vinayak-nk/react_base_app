React-Router
=============
npm i react-router-dom

1. Configure Routes
  import { BrowserRouter } from 'react-router-dom'

  <BrowserRouter>
    <App />
  </BrowserRouter>

  import { Routes, Route } from 'react-router-dom'

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>

2. Navigation on button click
  import { Link } from "react-router-dom"
    <Link to="/" >Home</Link>
    <Link to="/about">About</Link>

3. Navigate programatically
  import { useNavigate } from 'react-router'
  
  const navigate = useNavigate()

  onClick={() => navigate('order-summary')}

  go back to previos page
  ---------
  <button onClick={() => naviagate(-1)} >Go Back</button>
4. No Match Route
  <Route path="*" element={<NoMatch />} />
5. Nested Routes
    <Route path="products" element={<Products />}>
      <Route path="featured"  element={<FeaturedProducts />} />
      <Route path='new' element={<NewProducts />} />
    </Route>

    import { Link, Outlet } from 'react-router-dom'

6. Index Route
  <Route index element={<FeaturedProducts />} />
7. Dynamic Routes, URL params
  <Route path="users/:id" element={<UserDetails />} />
8. params
  import { useParams } from 'react-router'
  const params = useParams
9. Search Params
  import { useSearchParams } from 'react-router-dom'

  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'

  <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
  <button onClick={() => setSearchParams({})}>Reset Filter</button>

10. Lazy Loading
  import React, { lazy, Suspense } from 'react'
  const LazyAbout = lazy(() => import('./Components/About') )

  <Route path="about" element={
    <Suspense fallback={<>Loading....</>}>
      <LazyAbout />
    </Suspense>
    } />

