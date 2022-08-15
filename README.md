React Hooks
==============
1. useEffect
----------------
    -> handle side effects such as http requests, set & manage timers.
    -> Side effect -> Need to execute some action bcz of another action.
    -> 2 args passed: 1. function 2. array
    -> useEffect(() => {}, [])
    -> useEffect(() => {...}, [dependencies])
    -> Function should be executed only if dependencies changed not when component re-renders.
    -> Do not Add following as dependencies 
        -> build in API's (fetch, localStorage), state updating fns, global variabls
    -> Add following as dependencies
        -> state, props -> these may change if component/ parent renders.

    -> DEBOUNCING: use clean up function to reduce number of side effects
    

