import React,{useState} from "react";
 
const TodoHeader = ({todos, setTodos})=>{
    const [newTodo, setNewTodo] = useState("");
    
    const validateInput =()=> {
        if (!newTodo || newTodo === ""|| newTodo === undefined){
            alert(" Please add a task!")
        }
        else{
            //console.log("newTodo text validated!");
            addTask();
        }
    }
        const addTask = () => {
            console.log("Creating new todo:",newTodo);

            const newTodoObj ={
                label: newTodo,
                is_done: false
            }

            const appendedArray = [...todos, newTodoObj];
        setTodos(appendedArray);

        setNewTodo("");

        postNewTask(newTodoObj);
        }
        const postNewTask = async (todoObject) =>{
            const response = await fetch("https://playground.4geeks.com/todo/todos/Monalisa", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(todoObject)
            });
            if (response.ok){
                const data = await response.json()
                console.log("Here is my postNewTask data: ", data)
            }
        }

    return (
        <>
        <header className="toDo-header">
            <input
                type= "text"
                className= "new-todo"
                placeholder= "What needs to be done?"
                value= {newTodo}
                onChange= {event => setNewTodo(event.target.value)}
            />
            <button className ="add-task"
            onClick = {validateInput}
            >Add Task
            </button>
        </header>
        </>
    );
}
export default TodoHeader;