import React from "react";

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
