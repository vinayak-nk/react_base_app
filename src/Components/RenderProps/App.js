// It is a technique of "sharing code" between components using a "prop whose value is a function"

import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import Counter from './CounterFn'
import HoverCounter from './HoverCounter'
import User from './User'

class App extends Component {
  render() {
    return (
      <div>
        <Counter>
          {(count, IncrementCounter) => 
            <ClickCounter count={count} IncrementCounter={IncrementCounter} />
          }
        </Counter>
        <Counter>
          {(count, IncrementCounter) => <HoverCounter count={count} IncrementCounter={IncrementCounter} /> }
        </Counter>
        <User render={(isLoggedin) => isLoggedin ? 'Vinayak' : 'Guest' } />
      </div>
    )
  }
}

export default App