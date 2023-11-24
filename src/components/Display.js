import React, { useState } from 'react';
import "./Display.css";
    
const Display = (props) => {
    const { toDoListArray, setToDoListArray } = props;

    const toggleToDo = (toDoItem) => {
        toDoItem.deleted = !toDoItem.deleted;
        setToDoListArray([...toDoListArray]);
    }

    const deleteHandler = (id) => {
        setToDoListArray(
            toDoListArray.filter((toDoItem) => {return toDoItem.id !== id})
        ) 
    };

    return (
        <div>
            {toDoListArray.map((toDoItem, index) => (
            <div key={toDoItem.id}>
                {
                    toDoItem.deleted?
                    <p className='line-through'>{toDoItem.name}</p>: 
                    <p>{toDoItem.name}</p>
                }
                <input type="checkbox" name="deleted" onChange={() => toggleToDo(toDoItem)} />
                <button className='delete-button'onClick={() => deleteHandler(toDoItem.id)}>Delete </button>
            </div>
        ))}
        </div>
    );
};
    
export default Display;

