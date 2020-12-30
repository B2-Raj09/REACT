import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [input,setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = td => {
        setInput(td.target.value);
    };

    const handleSubmit = td => {
        td.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
            <div>
            <input type='text'
            placeholder='Update to-do?'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref = {inputRef}
            />
            <button className="todo-btn">Update</button>
            </div>
        )
        :
        (
            <div>
            <input type='text'
            placeholder='Anything to-do?'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref = {inputRef}
            />
            <button className="todo-btn">Add Todo</button>
            </div>
        )}

            
        </form>
    );
}

export default TodoForm
