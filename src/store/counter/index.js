export const Types = {
  ADD: "ADD",
}

export const Actions = {
  add: () => ({ type: Types.ADD }),
}

export const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD': {
      console.log('Reducer', state + 1)
      return state + 1;
    }
    default: {
      return state
    }
  }
}
