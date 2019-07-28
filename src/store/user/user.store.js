export const Types = {
  CREATE_USER: 'CREATE_USER',
}

export const Actions = {
  createUser: user => ({ type: Types.CREATE_USER, user }),
}

export const reducer = (state = {}, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}