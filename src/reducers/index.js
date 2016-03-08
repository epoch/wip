function route(prevState = { path: 'home' }, action) {
  switch (action.type) {
    case 'NAVIGATE':
      return Object.assign({}, prevState, { path: action.path });
    default:
      return prevState;
  }
}

function appReducer(state = {}, action) {
  return {
    route: route(state.route, action)
  }
}

export default appReducer;
