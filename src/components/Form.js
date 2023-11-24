import React, { useState } from 'react'; 
import "./Display.css";

const Form = (props) => {
    const { toDoListArray, setToDoListArray } = props;
    const [toDoItem, setToDoItem] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setToDoListArray([...toDoListArray, 
            {
                name: toDoItem,
                deleted: false,
                id: Math.floor(Math.random() * 100000000).toString()
            }]);
        setToDoItem("");
        
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type = "text" name = "todoItem" value={toDoItem} onChange={ (e) => setToDoItem(e.target.value)}
            />
            <button className='add-button'>Add</button> 
        </form>
    );
};
    
export default Form;