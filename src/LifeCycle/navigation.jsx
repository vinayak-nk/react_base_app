import React from 'react'
import { Link } from 'react-router-dom'
import pages from './pages'

export default function Navigation() {
  return (
    <div>
      {pages.map((page) => <div key={page.name}><Link to={page.path} exact={`${page?.exact}`} >{page.name}</Link></div>)}
      {/* <div>
        <Link to='/'>
          Discussion
        </Link>
      </div>
      <div>
        <Link to='/rules'>
          Rules
        </Link>
      </div>
      <div>
        <Link to='/workflow'>
          Workflow
        </Link>
      </div> */}
    </div>
  )
}
