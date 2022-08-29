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
    
2. useReducer
-----------------
    -> instead of useState prefer useReducer if updating a state triggers another state update. Combine them into single state.

    -> const [state, dispathcFn] = useReducer(reducerFn, initialState, initFn)
    -> reducerFn is triggered automatically when action is dispatched (dispatchFn) -> returns new updated state

3. useContext
---------------------
const AuthContext = React.createContext(initialState)
It takes an initial state.
Provide ->
    <AuthContext.Provider>
        {children ....}
    </AuthContext.Provider>
consume -> 
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <>
            {ctx.test}
          </>
        )
      }}
    </AuthContext.Consumer>

  Limitations
  ------------
  1. Not optimized for high frequency changes => redux
  2. Should not be used for all cmponent communications

4. useRef, forwardRef, useImperativeHandle
--------------------------------------------
  const emailInputRef = useRef();

  const Test = forwardRef((props, ref) => {})

  useImperativeHandle(ref, () => {return { focus: {} }})



  Rule of Hooks
  ===============
  1. Only in React Functions and Custom hooks.
  2. Only in Top level fns not in nested fns or block(eg. inisde if)
  3. useEffect -> make sure add dependency