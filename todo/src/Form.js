import React from 'react';
import './form.css';
import { FaPlus } from 'react-icons/fa';

export default function Form({list,setlist, todos, settodos}) {
    const inputtexthandler = (e => {
        setlist(e.target.value)
    })
    const submittodohandler = (e)=>{
        e.preventDefault();
        settodos([...todos, {text:list, completed: false, id : Math.random() * 1000}]);
        setlist("");
    }
    return (
        <form className="section-form" >
            <input type="text" value={list} onChange={inputtexthandler} className="input"/>
            <button type="submit" className="btn" onClick={submittodohandler}>
               <FaPlus/>
            </button >
            <div className="dropdown">
                <select>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
