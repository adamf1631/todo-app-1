import { Grid, Container } from "semantic-ui-react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTodos } from "./redux/todos/todoActions";
import Paginate from "./Pagination";

export default function Todos() {
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // Get current todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Grid stackable columns={2} divided>
        {currentTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </Grid>

      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 40,
        }}
        className="header"
      >
        <Paginate
          todosPerPage={todosPerPage}
          totalTodos={todos.length}
          paginate={paginate}
        />
      </Container>
    </>
  );
}
