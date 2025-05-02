import React, { useEffect } from "react";
 
const TodoBody = ({todos,setTodos})=>{ 

    useEffect (() => {
        fetchData();
        }, [])

        function fetchData(){
            fetch(`https://playground.4geeks.com/todo/users/Monalisa`)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log(data.todos);
                setTodos(data.todos);
            })
            .catch(error => {
                console.error('Looks like there is a problem:',error)
            })
        }
    

    const renderTodos = todos.map(todoItem => {
        return (
            <li className="todo-item" key={todoItem.id}>
                <h4>{todoItem.label}
                    <span>
                        <button 
                            className="delete-task"
                            onClick={() =>deleteTodo(todoItem.id)}
                            >X</button>
                    </span>
                </h4>
            </li>
        );
    })
    const deleteTodo = async (id) => {
        const updatedTodos = todos.filter((todoItem) => todoItem.id != id)
        setTodos(updatedTodos); 
        const response= await fetch(`https://playground.4geeks.com/todo/todos/${id}`,
            {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
            if (response.ok){
                console.log("Task Deleted ")
            } else {
                console.log("Please try again")
            }
            fetchData();
        }
    return (
        <>
        <section className="main">
            <ul className="todo-list">
                {todos.length !==0? renderTodos : "No tasks. Add a task."}
            </ul>   
        </section>
        </>
    );
}
export default TodoBody;