import React, { useState } from 'react'


interface Props {
    addTodo: AddTodo;
}
const TodoForm: React.FC<Props> = Props => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Props.addTodo(todo, Math.random().toFixed(5), false);
        setTodo("");
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                className="search_bar"
                type='text'
                placeholder="Your Todos"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />

            <button className="search_btn" type="submit" > Add</button>

        </form>
    )
}

export default TodoForm
