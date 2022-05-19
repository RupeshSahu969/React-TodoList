import React ,{ useState } from "react";

const TodoInput = ({addTodo}) => {

    const [value ,setValue] =useState("");
    return(
    <div>
        <input value={value}
         type="text" placeholder="New todo" 
        onChange={(e) => {
            setValue(e.target.value);
        }}/>
        <button onClick={() => {
            console.log(value)
            addTodo(value)
            setValue("")
        }}>Add</button>
    </div>
    );
}
export default TodoInput