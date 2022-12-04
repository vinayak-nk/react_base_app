import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navigation from './navigation'
import PageContent from './page-content'


export default function index() {
  return (
    <BrowserRouter>
      <Navigation />
      <PageContent />
    </BrowserRouter>
  )
}

