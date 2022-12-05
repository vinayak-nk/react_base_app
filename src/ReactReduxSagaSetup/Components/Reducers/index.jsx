const defaultState = {
  appName: 'Test App',
  users: [],
}


function App(state=defaultState, action) {
  console.log('action=', action)
  switch(action.type) {
    case 'CHANGE_APP_NAME': 
      return {
        ...state,
        appName: action.name,
      }
    case 'SET_USERS':
      return {
        ...state,
        users: action.data
      }
    default:
      return state
  }
}

export default App
