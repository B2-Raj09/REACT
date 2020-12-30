import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = td => {
        if(!td.text || /^\s*$/.test(td.text)) {
            return;
        }

        const newTodos = [td, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newVal) => {
        if(!newVal.text || /^\s*$/.test(newVal.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newVal : item)))
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(td => {
            if(td.id === id) {
                td.isComplete = !td.isComplete;
            }
            return td;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>What's your plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
