import React, { useState } from 'react'

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
    const [todo, setTodo] = useState("");
    const [arr, setArr] = useState<string[]>([]);


    // const handleTodo = (event: React.KeyboardEvent<HTMLDivElement>) => {
    //     if (event.key === "Enter") {
    //         setTodo("");
    //     }
    // }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(todo);

        let tempArr = arr;
        tempArr.push(todo);
        setArr(tempArr);

        setTodo("");
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="search_bar" type='text' placeholder="Your Todos" value={todo} onChange={e => setTodo(e.target.value)} />
                <p> {arr.map(x => <div>
                    {x}
                </div>)}</p>
            </form>



        </div>

    )
}

export default TodoList
