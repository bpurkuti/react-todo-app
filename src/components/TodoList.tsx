import React, { useState } from 'react'
import '../styles.css';
import TodoForm from './TodoForm'
import initialTodos from '../Data/initialTodos.json';
import Todo from './Todo';
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
        setTodos((prevState) => [newTodo, ...prevState]);

    }

    const toggleComplete = (id: string) => {
        setTodos((prevState) =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        //Same as 
                        // text: todo.text,
                        // id: todo.id,
                        // completed: !todo.completed
                        ...todo, completed: !todo.completed


                    };
                }
                else {
                    return todo;
                }
            })
        );

    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />

            {todos.map(todo =>
                <Todo key={todo.id} id={todo.id} completed={todo.completed} toggleComplete={toggleComplete} text={todo.text} />
            )}


            <p id="json"><pre> {JSON.stringify(todos, null, 2)} </pre></p>



        </div>

    )
}

export default TodoList
