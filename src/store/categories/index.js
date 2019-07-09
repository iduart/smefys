export const Types = {
  FETCH_CATEGORIES: "FETCH_CATEGORIES",
  FETCH_CATEGORIES_SUCCESS: "FETCH_CATEGORIES_SUCCESS",
}

export const Actions = {
  fetchCategories: () => ({ type: Types.FETCH_CATEGORIES }),
}

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case Types.FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        data: action.payload
      };
    }
    default: {
      return state
    }
  }
}
