import React,{useState} from 'react';
import Form from './Form';
import Todolist from './Todolist';
import './App.css';

function App() {
  const [list, setlist] = useState("");
  const [todos, settodos] = useState([])
  return (
    <div className="App">
      <h2 >Cynthia's To do list</h2>
      <Form  todos={todos} list={list} settodos={settodos} setlist ={setlist}/>
      <Todolist settodos ={settodos} todos={todos} />
    </div>
  );
}

export default App;
