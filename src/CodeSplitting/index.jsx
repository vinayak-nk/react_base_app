import React, { lazy, Suspense } from 'react'

const TestComp = lazy(() => import('./TestComponent'))

const fallback = <p>Loading...</p>

function CodeSplitting() {
  return (
    <Suspense fallback={fallback}>
      <TestComp />
    </Suspense>
  )
}

export default CodeSplitting