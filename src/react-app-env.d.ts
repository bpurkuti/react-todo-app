// <reference types="react-scripts" />

interface initialTodos {
    text: string;
    id: string;
    completed: boolean;
}


type AddTodo = (text: string,  id:string, completed: boolean) => void;
