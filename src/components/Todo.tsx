import React from "react";

interface Props {
    text: string
    id: string
    completed: boolean
    toggleComplete: ToggleComplete
}


const Todo: React.FC<Props> = (Props) => {
    return (
        <div className="todo_container">
            <div>
                <li className={Props.completed ? ("complete") : ("")}>
                    {Props.text}
                </li>
                <button onClick={() => Props.toggleComplete(Props.id)}> Complete</button>
                <button> Remove </button>
            </div>



        </div>
    );
};

export default Todo;
