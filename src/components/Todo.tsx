import React from "react";

// ToggleComplete, HandleRemove, and other functions are defined in react-app-env.d.ts which has global scope
// We define the type of these parameter before assigning them 
// TypeScript won't know their type unless as its from different component

interface Props {
    text: string
    id: string
    completed: boolean
    toggleComplete: ToggleComplete
    handleRemove: HandleRemove


}


const Todo: React.FC<Props> = (Props) => {
    return (
        <div className="todo_container">
            <div>
                <li className={Props.completed ? ("complete") : ("")} onClick={() => Props.toggleComplete(Props.id)} >
                    {Props.text}
                </li>
                <button className="todo_btns" onClick={() => Props.toggleComplete(Props.id)}> Complete</button>
                <button className="todo_btns" onClick={() => Props.handleRemove(Props.id)}> Remove </button>
            </div>



        </div>
    );
};

export default Todo;
