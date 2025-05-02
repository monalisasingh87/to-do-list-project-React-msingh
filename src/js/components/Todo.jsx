import React,{useState} from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";

 
const Todo = ()=>{
    const [todos, setTodos] = useState([]); 

    return (
        <>
            <h1>Todos</h1>
            <div>
                <TodoHeader 
                    todos={todos} 
                    setTodos={setTodos}
                />
            </div>
            <div>
                <TodoBody 
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>
            <div>
                <TodoFooter 
                    todos={todos}
                />
            </div>
        </>
    );
}
export default Todo;