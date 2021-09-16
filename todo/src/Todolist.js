import React from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa';
import './todolist.css';

export default function Todolist({todos, settodos}) {
    const deletehandler = () =>{
        settodos(todos.filter((x) =>{ x.id!== todos.id

        })
    }
    return (
        <div className="todo-container">
            <ul className="todo-list">
                   {todos.map((x)=>{
                       return (
                           <div key={todos.id}>
                            <li>{x.text}</li>
                            <button className="facheck"><FaCheck/></button>
                            <button className="fatrash"><FaTrash/></button>
                           </div>
                       )
                   })}
                
                
            </ul>
        </div>
    )
}
