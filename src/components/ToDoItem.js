import React from 'react';


const ToDoItem = (props) => {
    if (props.isActive === false) {
        return (
            <li>
                {props.name}
                <button onClick={() => props.delete(props.name)}>delete</button>
                <button onClick={() => props.edit(props.name, props.name)}>edit</button>
            </li>
            )
        } 
    return (
        <li>
            <input value={props.name} onChange={e => props.edit(props.name, e.target.value)}/>
            <button onClick={() => props.confirmEdit(props.name)}>confirm</button>
        </li>
    )
};

// function ToDoItem(props) {
//     return <li>{props.name} <button onClick={props.delete}>delete</button></li>
// }

export default ToDoItem;