import React from "react";
import { List } from "semantic-ui-react";

export default function Paginate({ todosPerPage, totalTodos, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <List horizontal>
        {pageNumbers.map((number) => (
          <List.Item key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </List.Item>
        ))}
      </List>
    </>
  );
}
