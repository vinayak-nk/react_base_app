import React, { Component } from 'react'
import Color from './Color'
import ErrorBoundary from './ErrorBoundary'

class MainComp extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Color colorName="green" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Color colorName="blue" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Color colorName="red" />
        </ErrorBoundary>
      </div>
    )
  }
}

export default MainComp