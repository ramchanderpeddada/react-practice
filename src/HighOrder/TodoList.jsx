import React from "react";
import Hoc from "./Hoc";

const TodoList = ({ data }) => {
  let renderTodos = data.map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title} </strong>
        </p>
      </div>
    );
  });

  return (
    <>
      <div>{renderTodos}</div>
    </>
  );
};

const SearchTodos = Hoc(TodoList, "todos");

export default SearchTodos;
