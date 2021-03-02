import React, { useState } from 'react'
import { List } from 'antd';
import Items from '../items/items';


const ListItems = () => {
    const [todo, setTodo] = useState([])
    const [todoName, setTodoName] = useState('')

    function addTodo(event) {
        
        setTodo(prevData => {
           return [
                ...prevData,
                todoName || 'teste'
                
            ]
        })
        setTodoName("")
        
    }

    return (
        <>  
            <div>
                <input 
                    type="text"
                    value={todoName}
                    onChange={event => setTodoName(event.target.value)}
                    onKeyPress={event => {if(event.key === 'Enter'){addTodo()}}}
                />
                <button onClick={addTodo} >add</button>
            </div>
            
            <List>
                {todo.map((item, index) => (
                    <Items 
                        id={index}
                        key={index}
                        item={todo}
                        checkItem={console.log('teste')}
                    >{item}</Items>
                ))}
            </List>
        </>
    )
}

export default ListItems