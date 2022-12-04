import React, { lazy, Suspense } from 'react';

const TestComponent = lazy(() => import('./TestComponent'));

const renderLoader = () => <p>Loading ...</p>;

const DetailsComponent = () => (
  <Suspense fallback={renderLoader()}>
    <TestComponent />
  </Suspense>
)

export default DetailsComponent
