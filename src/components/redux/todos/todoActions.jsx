import { FETCH_TODOS } from "./todosConstants";
import axios from "axios";

export const getTodos = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: 40,
      },
    });
    dispatch({
      type: FETCH_TODOS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e.message);
  }
};
