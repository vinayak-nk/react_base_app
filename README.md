Pure Component, Memo, useCallback, useMemo
=============================================
Pure Component
  Similar to React.Component.
  Re-renders only when state or props changes.
  ShouldComponentUpdate is automatically handled (Only shallow comparison)
Memo
  import React, { memo } from 'react'
  Functional Components. Similar to Pure component for class based components.
  16.6 version
  HOC
useCallback
  The React useCallback Hook returns a memoized callback function.
  prevent a component from re-rendering unless its props have changed.
  only runs when one of its dependencies updates.
  useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
  const addTodo = useCallback( () => {}, [])
useMemo
  The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
Diff: React.PureComponent vs React.Memo
  Class based vs function based components.
Diff: useCallback vs useMemo
  useMemo returns a memoized value
  React.useMemo(() => {   fooFunction()}, [dependencies])
  useCallback returns a memoized callback
  React.useCallback(() => {   fooFunction()}, [dependencies])
  useCallback to memoize a function, which means that this function only gets re-defined if any of its dependencies in the dependency array change


HOC and Render Props
======================
HOC
=====
  Advanved technique to reuse code logic
  function that takes a component and returns a new component.
  EX: redux connect. React.memo

  const EnhancedComments = HOC(Comments, 1)
  const HOC = (Cmp) => {
    return function Index () {
      return <Cmp />
    }
  }
  export default HOC

Render Props
============


Code splitting, Lazy loading, Suspense
==========================================
  Reduce bundle size.
  Suspending multiple components. Wait till all components are loaded.
  Handle loading failures.
  create multiple bundles that can be dynamically loaded at runtime.


