import { combineReducers } from "redux"

// Actions types
export const Types = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  RESET_CART: 'RESET_CART',
}

// Actions
export const Actions = {
  addItem: item => ({ type: Types.ADD_ITEM, item }),
  removeItem: item => ({ type: Types.REMOVE_ITEM, item }),
  resetCart: () => ({ type: Types.RESET_CART })
}

// Selectors
export const Selectors = {
  getItem: (state, id) => {
    const item = state.cart && state.cart.items && state.cart.items.find(item => item._id === id)
    return item ? { ...item } : null
  },
  getTotalPrice: state => state.cart && state.cart.totalPrice,
  getCart: state => state.cart,
  getCartItems: state => state.cart && state.cart.items
}

// Reducer
const addItem = (state, item) => {
  const index = state.findIndex(s => s._id === item._id)
  if (index > -1) {
    state[index].count++
  } else {
    state.push({ ...item, count: 1 })
  }
  return state
}

const removeItem = (state, item) => {
  const index = state.findIndex(s => s._id === item._id)
  if (index <= -1) {
    return state
  }
  const currentItem = state[index]
  if (currentItem.count <= 0) {
    return state
  }
  currentItem.count--
  
  //if count is zero, remove from cart
  if (currentItem.count === 0) {
    state.splice(index, 1);
  }
  return state
}

const items = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_ITEM: {
      return addItem([...state], action.item)
    }
    case Types.REMOVE_ITEM: {
      return removeItem([...state], action.item)
    }
    case Types.RESET_CART: {
      return []
    }
    default: {
      return state
    }
  }
}

const totalPrice = (state = 0, action) => {
  switch (action.type) {
    case Types.ADD_ITEM: {
      const { item } = action;
      return state + parseInt(item.price);
    }
    case Types.REMOVE_ITEM: {
      const { item } = action;
      return state - parseInt(item.price);
    }
    case Types.RESET_CART: {
      return 0;
    }
    default: {
      return state
    }
  }
}

export const reducer = combineReducers({
  items,
  totalPrice
})
