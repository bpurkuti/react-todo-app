import React, { useState } from 'react'
import '../styles.css';
import TodoForm from './TodoForm'
import initialTodos from '../Data/initialTodos.json';
import Todo from './Todo';




const TodoList = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [filter, setFilter] = useState('Show All');
    const [toggleJson, setToggleJson] = useState(true);

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

    const completeAll = () => {


    }

    const handleRemove = (id: string) => {
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

            <div> Todos Left: {todos.filter(todo => !todo.completed).length} </div>

            <button onClick={() => setFilter("Show All")}> Show All </button>
            <button onClick={() => setFilter("Show Active")}> Show Active </button>
            <button onClick={() => setFilter("Show Complete")}> Show Completed </button>

            <h4> Filter: {filter}</h4>

            {filter === "Show All" ?
                (todos.map(todo =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        completed={todo.completed}
                        toggleComplete={toggleComplete}
                        handleRemove={handleRemove}
                        text={todo.text} />
                )) :
                (filter == "Show Active" ?
                    (todos.filter(todo => !todo.completed).map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            completed={todo.completed}
                            toggleComplete={toggleComplete}
                            handleRemove={handleRemove}
                            text={todo.text} />
                    )) :
                    (todos.filter(todo => todo.completed).map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            completed={todo.completed}
                            toggleComplete={toggleComplete}
                            handleRemove={handleRemove}
                            text={todo.text} />
                    )))}


            {/* Json representation */}

            <div>
                Json Representation
                <input type="checkbox" onClick={() => setToggleJson(!toggleJson)} checked={toggleJson} />
            </div>

            {toggleJson ? (<div className="show_json">

                {filter === "Show All" ?
                    (<p id="json"><pre> {JSON.stringify(todos, null, 2)} </pre></p>) :
                    (filter == "Show Active" ?
                        (
                            <p id="json"><pre> {JSON.stringify(todos.filter(todo => !todo.completed), null, 2)} </pre></p>
                        ) :
                        (
                            <p id="json"><pre> {JSON.stringify(todos.filter(todo => todo.completed), null, 2)} </pre></p>
                        )
                    )
                }

            </div>) : ("")}



        </div>

    )
}

export default TodoList
