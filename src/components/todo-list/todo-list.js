import React from "react";

import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(({ id, ...others }) => {
    return (
      <li className="list-group-item" key={id}>
        <TodoListItem
          {...others}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
