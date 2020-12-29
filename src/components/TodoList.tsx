import React, { useState } from 'react'
import '../styles.css';
import TodoForm from './TodoForm'
import initialTodos from '../Data/initialTodos.json';
import Todo from './Todo';




const TodoList = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [filter, setFilter] = useState('Show All');
    const [toggleJson, setToggleJson] = useState(false);

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
        todos.map(todo => (todo.completed) ? ("") : toggleComplete(todo.id));

    }

    const handleRemove = (id: string) => {
        //todo..
        setTodos((prevState) => prevState.filter(todo => todo.id !== id));

    }

    const removeAllCompleted = () => {
        //todo..
        todos.map(todo => (todo.completed) ? (handleRemove(todo.id)) : (""))
    }

    return (
        <div>

            <h3>
                Add your shopping list, reminders and rest of the things to do in one neat place
            </h3>
            <TodoForm addTodo={addTodo} />

            <div className="filter_name"> Todos Left: {todos.filter(todo => !todo.completed).length} </div>

            <div className='btns_1'>
                <button onClick={() => setFilter("Show All")}> Show All </button>
                <button onClick={() => setFilter("Show Active")}> Show Active </button>
                <button onClick={() => setFilter("Show Complete")}> Show Completed </button>
            </div>

            <div className="btns_2">
                {(todos.length > 0) ? (<button onClick={completeAll}> Complete All </button>) : ("")}

                {(todos.filter(todo => todo.completed).length > 0) ? (<button onClick={removeAllCompleted}> Remove Completed </button>) : ("")}


            </div>

            <h4 className="filter_name"> Filter: {filter}</h4>

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
                (filter === "Show Active" ?
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
                <input type="checkbox" onClick={() => setToggleJson(!toggleJson)} checked={toggleJson} defaultChecked />
            </div>

            {toggleJson ? (<div className="show_json">

                {filter === "Show All" ?
                    (<p id="json"><pre> {JSON.stringify(todos, null, 2)} </pre></p>) :
                    (filter === "Show Active" ?
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
