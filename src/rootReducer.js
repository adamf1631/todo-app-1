import { combineReducers } from "redux";
import todosReducer from "./components/redux/todos/todosReducer";

export default combineReducers({
  todos: todosReducer,
});
