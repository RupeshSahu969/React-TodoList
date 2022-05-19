import React,{ useState} from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";


const TodoApp = () => {

    const [todos, setTodos] =useState([])
    const addTodo =(xyz) => {

        setTodos([...todos,xyz])
        console.log(todos)
    };
    const deleteTodo =(value) => {
        setTodos(todos.filter((todo) => todo !== value))
    }
    return(
    <div>
        TodoApp
        <TodoInput addTodo={addTodo}/>
        <TodoList>
            {todos.map((todo) =>{
                // return<li>{todo}</li>
                <TodoApp value={todo} deleteTodo={deleteTodo} />
            })}
        </TodoList>
    </div>
);
}
export default TodoApp