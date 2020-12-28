import React, { useState } from 'react'
import './TodoList.css';
import TodoForm from './TodoForm'
import initialTodos from '../Data/initialTodos.json';
/* 
1. Add Todo
2, Display Todo
3. Cross-off Todo/Mark as completed
4. Show # of active todo
5. Filter by All/Active/Complete
6. Delete Todo
7. Delete all completed
    - Show only if at least one todo is completed
8. Button to toggle all on or off
 */

// interface FormControlEvent extends React.FormEvent<HTMLFormElement> {
//     target: HTMLFormElement;
// }


const TodoList = () => {
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (text: string, id: string, completed: boolean) => {
        if (!text.length) {
            return;
        }
        const newTodo = { text, id, completed };
        // const tempArr = todos;
        // tempArr.push(newTodo);
        // setTodos(tempArr);

        setTodos((prevState) => [newTodo, ...prevState]);

    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <pre>{JSON.stringify(todos, null, 2)} </pre>

        </div>

    )
}

export default TodoList
