export const Types = {
  FETCH_AUTH: 'FETCH_AUTH',
  LOGOUT: 'LOGOUT'
}

export const Actions = {
  fetchAuth: user => ({ type: Types.FETCH_AUTH, user }),
  logout: () => ({ type: Types.LOGOUT })
}

export const reducer = (state = {}, action) => {
  switch(action.type) {
    case Types.FETCH_AUTH: {
      return {
        ...action.auth
      }
    }
    case Types.LOGOUT: {
      return {} 
    }
    default: {
      return state;
    }
  }
}