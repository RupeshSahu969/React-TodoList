import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({children}) => {

    return(
    <div>
        <h3>Here is your TODO List</h3>
        <ul>{children}</ul>
    </div>
);
}
export default TodoList