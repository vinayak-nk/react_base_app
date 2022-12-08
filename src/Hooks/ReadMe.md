16.8

1. State in Functional component using UseState
2. Date Fetching
    ComponentDidMount and ComponentDidUpdate vs UseEffect
3. Event listeners
    ComponentDidMount and ComponentWillUnmount vs UseEffect

Rules
========
1. Only use at the top level. Don't use inside loops. conditions or nested functions.
2. Call hooks from React functions


UseState : replaces constructor
==========
const [count, setCount] = useState(0)
  With previous state
  With previous object
  With previous Array


Use Effect
============
=> Side effects in functional components
=> Replacements for => ComponentDidMount, ComponentDidUpdate and ComponentWillUnmount
=> useEffect runs after first render and every update(re-render).

1. Syntax: useEffect(() => {}, [Dependencies])
2. After render
3. Conditionally run
4. Run once
5. clean up
6. incorrect dependency
7. fatching data


