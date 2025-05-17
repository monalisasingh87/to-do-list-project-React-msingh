import React from "react";

export async function fetchData(){

            const response= await fetch(`https://playground.4geeks.com/todo/users/Monalisa`)
            
            const data= await response.json()
            return data.todos
            
        }