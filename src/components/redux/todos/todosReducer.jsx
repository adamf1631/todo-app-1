import { FETCH_TODOS } from "./todosConstants";

const initialState = {
  todos: [],
  loading: true,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
