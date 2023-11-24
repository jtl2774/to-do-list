import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [ toDoListArray, setToDoListArray ] = useState([]);
  const [toDoItem, setToDoItem] = useState([]);
  return (
    <div className="App">
      <Form toDoListArray={ toDoListArray } setToDoListArray={ setToDoListArray } />
      <Display toDoListArray={ toDoListArray } setToDoListArray={ setToDoListArray } toDoItem = {toDoItem} setToDoItem={setToDoItem}/>
    </div>
  );
}

export default App;