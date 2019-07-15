import { combineReducers } from 'redux';
import { esMoment } from '../../utils/formatDate'

const tomorrow = esMoment().add(1, "day")

//Selectors
export const Selectors = {
  getOrderDate: state => state.order && state.order.orderDate
}

// Reducers
const orderDate = (state = tomorrow, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

export const reducer = combineReducers({
  orderDate
})