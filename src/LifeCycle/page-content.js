import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import pages from './pages'

// import Discussion from './discussion'
// import Rules from './rules'
// import Workflow from './workflow'


export default function Pages() {
  return (
    <div style={{ marginTop: '10px' }}>
      <Routes>
        {pages.map((page) => (<Route key={page.name} path={page.path} element={page.component} />))}
        {/* <Route path="/" element={<Discussion />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/workflow" element={<Workflow />} /> */}
      </Routes>
    </div>
  )
}
